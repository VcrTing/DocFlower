import float from './_util/float'

const judge_has_children = function(user) {

    if ('children' in user) { 
        if (user.children.length > 0 ) { 
            return true 
        }
    } 
    return false 
}

const num_reward = function(pv, rag, way = true) {
    if (pv == undefined || rag == undefined) {
        return 0
    }
    if (way) {

        return float.floatMul(pv, rag)
    }
    return float.floatAdd(pv, rag)
}

const numd_pv = function(item) {
    let i = 0 

    if (
        item.buys && 
        item.buys.length >= 0
    ) {

        item.buys.map(e => { 
            i = float.floatAdd(
                i,
                float.floatMul(
                    e.num,
                    e.pv
                )
            )
            return e 
        })
    }
    return i
}

// 判断是否合资格
const numd_inum = function(ipv, limit) {
    if (ipv >= limit) { return 1 } return 0 }

// 储存 transfer 中的 VIP 给 Item
const transfer_vip = function(transfer, unid) {
    
    let res = { ratio: [] }
    const _len = transfer.length

    for (let i= 0; i< _len; i++ ) {


        if (transfer[i].unid == unid) {

            res = transfer[i].vip
            break
        }
    }
    return res
}


export default {
    numd_pv,
    numd_inum,
    num_reward,
    judge_has_children,

    transfer_vip,
    ...float
}