import React from 'react'
import { Section, SectionActions, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section/section'

export default function NoticeBoard() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Notice Board</SectionTitle>
                <SectionDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis est eaque nisi excepturi distinctio hic quod.</SectionDescription>
            </SectionHeader>
            <SectionContent>
                ...
            </SectionContent>
            {/* <SectionActions>
                Optional 
            </SectionActions> */}
        </Section>
    )
}
