"use client"
import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AskQuestion(props) {
    return (
        <div className='container my-5'>
         <Accordion allowZeroExpanded>
        {props?.AskQ?.map((item) => (
            <AccordionItem key={item?.id}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item?.heading}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {item?.content}
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    </div>
    );
}