import util from './util'

import computed from './doing/_computed'
import rolling from './doing/_rolling_tree'
import vip from './doing/_vip'

import vip_view from './_view/_vip_view'

import recommend from './_bonus/_recomend'
import team_layer from './_bonus/_team_layer'
import active_house from './_bonus/_active_house'


const _build = function(items, transfer, hooking) {

    items.map(e => {

        if (util.judge_has_children(e)) {

            _build(e.children, transfer, hooking)
        }

        hooking(e, transfer)
    })
}

export default {
    _build,
    
    rolling,
    computed,
    vip,
    
    vip_view,

    recommend,
    team_layer,
    active_house,
}
