import util from '../util'
import conf from '../conf'

// 计算奖金
const _numd_usd = function(rec, can_num, usd) {

    const n = Math.floor(rec.length / can_num);
    return util.floatMul(usd, n)
}

// 计算需求数据
// item = 每一个用户
const _numd = function(item, can_num, can_pv, usd) {

    let res = [ ]

    return new Promise((rej, rev) => {
        if (util.judge_has_children(item)) {

            const c = item.children
            if ( c.length >= can_num ) {
    
                // e = 第二层
                c.map(ee => {
    
                    if (ee.ipv >= can_pv && util.judge_has_children(ee)) {
                        
                        const cc = ee.children
                        const _res_2 = [ ]
                        
                        // e = 第三层
                        cc.map(eee => {
    
                            if (eee.ipv >= can_pv) {
    
                                _res_2.push(eee.ipv)
                            }
                        })
                        
                        if (_res_2.length >= can_num) {
    
                            res.push(_res_2)
                        }
                    }
                })
            }
        }

        rej(
            _numd_usd(res, can_num, usd)
        )
    })
}

const _build = function(items, can_num, can_pv, usd) {

    items.map(async e => {

        if (util.judge_has_children(e)) {

            _build(e.children, can_num, can_pv, usd)
        }

        e.bonus.usd_active_house = await _numd(e, can_num, can_pv, usd)
    })
}

// 均有 ASYNC
// items = 根据 for one 进行改变，可以计算单人的，也可计算全体的
// for_one = true 则计算 单人的，= false 则计算全体的

// 可以 自定义 3个参数：达标人数、达标PV、美金
const active_house = async function(
    items, 
    transfer,
    for_one = false,
    can_num = conf.ACTIVE_MEMBER_NUM, 
    can_pv = conf.USER_PV_LIMIT,
    usd = conf.ACTIVE_USD
    ) {
    
    return new Promise(async (rej, rev) => {

        let res = 0

        if (for_one) {
            res = await _numd(items, can_num, can_pv, usd)
        } else {
            res = _build(items, can_num, can_pv, usd)
        }
        
        rej(
            res
        )
    })
}


export default active_house