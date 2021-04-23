import util from '../util'
import conf from '../conf'

import api_vip from '../_util/vip'
/*
    根据 sponser 和 enroller 结构进行 vip 定义
*/
const _build = function(item) {
    
    const ipv = item.ipv

    const can_num_SPONSER = item.son_can_num_SPONSER
    const can_num_ENROLLER = item.son_can_num_ENROLLER

    const pvs_SPONSER = item.son_pv_SPONSER
    const pvs_ENROLLER = item.son_pv_ENROLLER

    const res = api_vip(
        ipv,
        can_num_SPONSER,
        can_num_ENROLLER,

        pvs_SPONSER,
        pvs_ENROLLER
    )

    return res
}

// item = 传递 transfer 中的 item 过来
const vip = function(item) {
    return _build(item)
}

export default vip