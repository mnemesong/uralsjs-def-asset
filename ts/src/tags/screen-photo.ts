import * as t from "uralsjs-templator"

export const tag = 'screen-photo'

export const renderer: t.dsl.abstracts.render.T<typeof tag> = {
    'screen-photo': (params, content) => {
        const cls = params.class 
            ? (params.class + ' screen') 
            : 'screen'
        const photo = params['photo'] 
            ? (typeof params['photo'] === 'string'
                ? params['photo']
                : params['photo'].toString()) 
            : ''
        const paramsCorrected = {...params}
        if(params['photo']) { delete paramsCorrected[photo]; }
        return t.tag.render(
            [   'div',
            paramsCorrected,
                [   'div',
                    {style: "position: absolute; height:100%; width:100%;"},
                    [   'div',
                        {
                            class: 'screen-sticky',
                            style: (photo.length > 0) 
                                ? `background-image: url('${photo}');`
                                : ''
                        }
                    ]
                ],
                content
            ], 
            t.def.renderer
        )
    }
}