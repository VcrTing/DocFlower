
import util from '../util'
import conf from '../conf'

/*  
    将 数组结构 转换成 树形结构
*/

const _build = function(ul, _init, hooking, unid_field, layer = -1) {

    let res = [ ]
    layer += 1

    ul.map( e => {

        if (e[ unid_field ] == _init) {
            
            e.children = _build( ul, e.unid, hooking, unid_field, layer )
            e.index = layer
            e.ipv = util.numd_pv( e )

            if (hooking != null) { hooking(e) } 
            res.push( e )
        }
    })

    return res
}

// users = 用户数组
// model = 模型类别
// _init = 0 代 unid
// hooking = 在_build之前，执行操作
const rolling = function(users, model, hooking, _init = undefined) {
    return new Promise((rej, rev) => {

        let res = [ ]
        if (model == 'SPONSER' || model == 'sponser' || model == 0) {

            res = _build(
                users,
                _init,
                hooking,
                'sponser_id'
            )
        } else {
            res = _build(
                users,
                _init,
                hooking,
                'enroller_id'
            )
        }

        rej(
            JSON.parse(JSON.stringify(res))
        )
    })
}

export default rolling