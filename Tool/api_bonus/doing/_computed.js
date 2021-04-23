
import util from '../util'
import conf from '../conf'

/*
    获取之后要用的数据
*/
const _build_transfer = function(transfer, item, model) {
    let index = -1
    const len = transfer.length
    
    for (let j = 0 ; j < len; j ++ ) {
        if (transfer[j].unid == item.unid) {
            index = j
        }
    }

    if (index >= 0) {

        transfer[index][`son_pv_${model}`] = item.son_pv
        transfer[index][`son_can_num_${model}`] = item.son_can_num
        
    } else {
        const res = {
            unid: item.unid,
            ipv: item.ipv,
        }

        res[`son_pv_${model}`] = item.son_pv
        res[`son_can_num_${model}`] = item.son_can_num

        transfer.push( res )
    }
}

/* 
    提取数据，并将数据加至 中转列表
*/
const _build = function(items, transfer, model, hooking) {
    // 变量 初始化
    let res = { num: 0, pv: 0 }
    let inum = 0

    items.map(e => {

        // 变量 初始化
        let _res = { num: 0, pv: 0 }
        inum = util.numd_inum(e.ipv, conf.USER_PV_LIMIT)

        // 应用 递归
        if (util.judge_has_children(e)) {
            _res = _build( e.children, transfer, model, hooking )
        }
        
        // 新增 用户数据
        e.son_pv = _res.pv
        e.son_can_num = _res.num

        // 递归数据 搜集
        res.pv = util.floatAdd(
            res.pv,
            util.floatAdd(
                _res.pv, e.ipv
            )
        )
        res.num = util.floatAdd(
            res.num,
            util.floatAdd(
                _res.num, inum
            )
        )
        
        // 加入中转
        _build_transfer(transfer, e, model)

        // 执行 回调函数
        if (hooking != null) { hooking(e) }
    })

    return res
}

// tree = 用户树形结构
// model = 树形结构类型
// hooking = 回调函数
const computed = function(items, model, transfer, hooking) {

    return new Promise((rej, rev) => {

        _build(items, transfer, model, hooking)

        rej(transfer)
    })
}

export default computed