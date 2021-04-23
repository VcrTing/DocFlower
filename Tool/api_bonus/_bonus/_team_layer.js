import util from '../util'
import conf from '../conf'

// 7 层压缩计算
const _layer_compresser = function(items, send_pv, send_layer, ratios, PV_LIMIT, LAYER_DEPTH) {

    let res = 0
    let r = ratios[send_layer]
    if (r == undefined) { r = 0 }

    items.map(e => {

        let _res = 0.0

        if (send_layer < LAYER_DEPTH) {

            e.usd_layer = util.floatMul(
                send_layer + 1,
                util.floatMul( r, e.ipv )
            )

            let pv = util.floatAdd( e.ipv, send_pv )
            let _layer = send_layer + 1

            if (pv >= PV_LIMIT) {

                pv = 0
            } else {

                _layer -= 1
            }

            if (util.judge_has_children(e)) {

                _res = _layer_compresser( e.children, pv, _layer, ratios, PV_LIMIT, LAYER_DEPTH)
            }
        } else {

            e.usd_layer = 0
        }

        res = util.floatAdd(
            res,
            util.floatAdd( e.usd_layer, _res )
        )

        return e
    })

    return res
}

// 自带 递归
const _build = function(items, transfer, can_pv, layer_depth) {
    

    items.map(e => {

        e.vip = util.transfer_vip(transfer, e.unid)

        if (util.judge_has_children(e)) {

            const c = e.children
            _build(c, transfer, can_pv, layer_depth)

            e.bonus.usd_team_layer = _layer_compresser(c, 0, 0, e.vip.ratio, can_pv, layer_depth)
            
        } else {
        
            e.bonus.usd_team_layer = 0
        }
    })
}

// 均有 ASYNC
// for_one = true 则计算单人的 。 = false 则计算团体的。
// items 可以传 个人，也可以传 团体

// 可自定义 2 个参数： 几层压缩深度、压缩达标 PV
const team_layer = function(items, transfer, for_one = false, can_pv = conf.USER_PV_LIMIT, layer_depth = conf.LAYER_DEPTH_NUM) {

    return new Promise((rej, rev) => {

        let res = 0

        if (for_one) {
            res = _layer_compresser(items.children, 0, 0, items.vip.ratio, can_pv, layer_depth)
        } else {
            res = _build(items, transfer, can_pv, layer_depth)
        }
    
        rej(
            res
        )
    })
}

export default team_layer