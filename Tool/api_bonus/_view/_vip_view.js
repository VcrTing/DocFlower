import conf from '../conf'

const SIMPLER = conf.SIMPLER
const LEADER = conf.LEADER

const EMPTY = { name: '普通会员', type: SIMPLER, star: 0 }

const VIPS_SIMPLER = [
    { name: '一级会员', type: SIMPLER, star: 1 },
    { name: '二级会员', type: SIMPLER, star: 2 },
    { name: '三级会员', type: SIMPLER, star: 3 },
    { name: '四级会员', type: SIMPLER, star: 4 },
    { name: '五级会员', type: SIMPLER, star: 5 },
]
const VIPS_LEADER = [
    { name: '一星领袖', type: LEADER, star: 1 },
    { name: '二星领袖', type: LEADER, star: 2 },
    { name: '三星领袖', type: LEADER, star: 3 },
    { name: '四星领袖', type: LEADER, star: 4 },
    { name: '五星领袖', type: LEADER, star: 5 },
]

//
const code_to_content = function(rec) {
    let res = ''

    if (rec == undefined) { return EMPTY }

    if (rec[0] == SIMPLER) {

        if (rec[1] == 0) { return res }
        res = VIPS_SIMPLER[ rec[1] - 1]
    } else {

        res = VIPS_LEADER[ rec[1] - 1]
    }
    return res
}

const split_code = function(rec, option = true) {

    let res = null

    if (option) {

        res = rec.split('_')
    } else {

        res = rec.join('_')
    }

    return res
}

export default {
    split_code,
    code_to_content
}