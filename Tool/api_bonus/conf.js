
// 单人用户 PV 超越值
const USER_PV_LIMIT = 100

// 层级深度
const LAYER_DEPTH_NUM = 7

// 活跃用户数量
const ACTIVE_MEMBER_NUM = 3

// 活跃分店奖金额
const ACTIVE_USD = 130

// 推荐层数深度
const RECOMMEND_DEPTH = 3

/*
    VIP
*/
const zero = 0
const ratio_design = [ 0.07, 0.06, 0.05, 0.03, 0.02 ]

const SIMPLER = 'simpler'
const LEADER = 'leader'

// VIP 层级 奖励比率
const VIP_LAYER_RATIOS = { }

VIP_LAYER_RATIOS[ SIMPLER ] = [
    [ ratio_design[0], zero, zero, zero, zero, zero, zero],
    [ ratio_design[0], ratio_design[1], zero, zero, zero, zero, zero],
    [ ratio_design[0], ratio_design[1], ratio_design[1], zero, zero, zero, zero],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], zero, zero, zero],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], zero, zero],
]

VIP_LAYER_RATIOS[ LEADER ] = [
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], ratio_design[3], zero],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], ratio_design[3], ratio_design[4]],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], ratio_design[3], ratio_design[4]],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], ratio_design[3], ratio_design[4]],
    [ ratio_design[0], ratio_design[1], ratio_design[1], ratio_design[2], ratio_design[2], ratio_design[3], ratio_design[4]],
]

export default {
    USER_PV_LIMIT,
    LAYER_DEPTH_NUM,
    ACTIVE_MEMBER_NUM,
    ACTIVE_USD,

    RECOMMEND_DEPTH,

    SIMPLER,
    LEADER,

    VIP_LAYER_RATIOS,
}