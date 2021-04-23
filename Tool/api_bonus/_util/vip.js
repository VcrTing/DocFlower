import conf from '../conf'
import util from '../util'

const LEADER = conf.LEADER
const SAMPLER = conf.SIMPLER

const PV_LINE_SPONSER = 5000
const PV_LINE_ENROLLER = 2000
const NUM_LINE_ENROLLER = 2

// 获取 会员 OBJECT、奖金
const _vip_structure = function(name, star) {

    let ratio = conf.VIP_LAYER_RATIOS[ name ][ star - 1 ]

    if (ratio == undefined) { ratio = [ ] }

    return {
        name,
        star,
        ratio
    }
}

// 判断 普通会员
const _judge_SIMPLER = function(epv_SPONSER) {
    
    let _star = 3
    if (epv_SPONSER > 1000) {

        if (epv_SPONSER >= 3000) {

            _star = 5
        } else if (epv_SPONSER >= 2000 ) {

            _star = 4
        }

    } else if (epv_SPONSER < 1000) {

        if (epv_SPONSER < 500) {

            _star = 1
        } else {

            _star = 2
        }

    }
    return _star
} 

// 判断 领袖
const _judge_LEADER = function(can_num_ENROLLER, epv_SPONSER, epv_ENROLLER) {
    
    let _star = 3
    if (
        (can_num_ENROLLER > 4) && 
        (epv_SPONSER > 25000) && 
        (epv_ENROLLER > 5000)
    ) {

        if 
        ( (can_num_ENROLLER >= 6) && (epv_SPONSER >= 150000) && (epv_ENROLLER >= 25000)
        ) {
            _star = 5
        } 
        else if 
        ( (can_num_ENROLLER >= 5) && (epv_SPONSER >= 72000) && (epv_ENROLLER >= 9000)
        ) {
            _star = 4
        }

    } else if (
        (can_num_ENROLLER < 4) || 
        (epv_SPONSER < 25000) || 
        (epv_ENROLLER < 5000)
    ) {

        if 
        ( (can_num_ENROLLER >= 3) && (epv_SPONSER >= 9000) && (epv_ENROLLER >= 3000)
        ) {
            _star = 2
        } 
        else 
        {
            _star = 1
        }
    }

    return _star
} 

// 根据 数据 获取 会员 OBJECT 的 总方法
const build_vip = function(ipv, can_num_SPONSER, can_num_ENROLLER, pvs_SPONSER, pvs_ENROLLER) {
    let _name = SAMPLER
    let _star = 1

    if (ipv < conf.USER_PV_LIMIT) {
        _star = 0
    } else {

        const epv_SPONSER = util.floatAdd(ipv, pvs_SPONSER)
        const epv_ENROLLER = util.floatAdd(ipv, pvs_ENROLLER)

        if (
            (epv_SPONSER >= PV_LINE_SPONSER) &&
            (epv_ENROLLER >= PV_LINE_ENROLLER) &&

            (can_num_ENROLLER >= NUM_LINE_ENROLLER)
        ) {

            _name = LEADER
            _star = _judge_LEADER(can_num_ENROLLER, epv_SPONSER, epv_ENROLLER)
        } else {

            _star = _judge_SIMPLER(epv_SPONSER)
        }
    }

    return _vip_structure(_name, _star)
}

export default build_vip