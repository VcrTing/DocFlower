import util from '../util'
import conf from '../conf'

const _usd_recomend = function(items, ratios, layer = 0) {

    let usd = 0

    layer += 1


    items.map(e => {

        let son_usd = 0
        if (layer < conf.RECOMMEND_DEPTH && util.judge_has_children(e)) {
            
            son_usd = _usd_recomend(e.children, ratios, layer)

            usd = util.floatAdd(
                usd,
                son_usd
            )
        }

        usd = util.floatAdd(
            usd,
            util.floatMul(
                e.pv_recommend_one,
                ratios[ layer - 1 ]
            )
        )
    })

    return usd
}

const _build = function(items, transfer, ratios) {

    let res = 0

    items.map(e => {

        let recommend_pv = 0
        e.vip = util.transfer_vip(transfer, e.unid)

        if (util.judge_has_children(e)) {

            recommend_pv = _build(e.children, transfer, ratios)
        }

        // 加入 条件
        if (
            e.ipv > 0 &&
            e.is_new
        ) {
            res = util.floatAdd(
                res,
                e.ipv
            )
        }

        e.pv_recommend_one = recommend_pv

        // 计算 美金
        e.bonus.usd_recommend = _usd_recomend([ e ], ratios)
    })

    return res
}

// 均有 ASYNC
// 只能计算团体的，即一次性计算所有的首购推荐
const recommend = function(items, transfer, ratios = [ 0.2, 0.1, 0.05 ]) {

    return new Promise((rej, rev) => {
        
        const res = _build(items, transfer, ratios)

        rej(
            res
        )
    })
}

export default recommend