import util from '../util'
import conf from '../conf'

import active_house from '../_bonus/_active_house'
import recomend from '../_bonus/_recomend'

import team_layer from '../_bonus/_team_layer'

const _build = function(items, transfer, hooking) {

    items.map(e => {
        
    })
}

const bonus = async function(trees, transfer, hooking) {
    
    await team_layer(trees, transfer)
    await active_house(trees) 
    await recomend(trees, transfer)
    
}

export default bonus