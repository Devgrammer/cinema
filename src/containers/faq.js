import React from 'react'
import { Accordion, OptForm} from '../components' 
import faqData from '../Fixtures/faqs.json'

export function FaqContainer( ) {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqData.map((item) => (
                <Accordion.Item key = {item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>  
                </Accordion.Item>
                 ))}
                <Accordion.Item />
                <OptForm >
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it Now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
                </Accordion>
              
    );
}