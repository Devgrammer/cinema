import React from 'react'
import {Jumbotron} from '../components'
import jumboData from '../Fixtures/jumbo.json'


export  function JumbotronContainer() {
    return (
        <Jumbotron.Container>
             {jumboData.map((item) => (
                <Jumbotron key={ item.Id } direction={ item.direction }>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{ item.title }</Jumbotron.Title>
                        <Jumbotron.SubTitle>{ item.subTitle }</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src={ item.image } alt={ item.alt } />
                    </Jumbotron.Pane>
                </Jumbotron>
            )) }
        </Jumbotron.Container>

    );
}


