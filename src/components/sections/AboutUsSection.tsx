'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTestVariabiles } from '@/hooks/useTestVariabiles';
import { spaceTrim } from '@promptbook/utils';
import Image from 'next/image';
import Link from 'next/link';
import { MarkdownContent } from '../utils/MarkdownContent/MarkdownContent';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    imagePosition?: string;
    imageBackground?: string;
    link: string;
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Pavol Hejný',
        role: 'CTO & Co-founder\nAI engineer and developer',
        image: '/people/pavol-hejny-transparent.png',
        imagePosition: 'center -5%',
        imageBackground: `linear-gradient(215deg, rgb(253, 160, 133) 0%, rgb(0 149 255) 100%)`,
        link: 'https://www.pavolhejny.com/',
    },
    {
        name: 'Jiří Jahn',
        role: 'CEO & Co-founder\nBusiness development and communication',
        image: '/people/jiri-jahn-transparent.png',
        imagePosition: 'center 5px',
        imageBackground: `linear-gradient(145deg, rgb(253, 160, 133) 0%, rgb(0 149 255) 100%)`,
        link: 'https://www.linkedin.com/in/jirkajahn/',
    },
];

export function AboutUsSection() {
    const { pavolRole, jiriRole } = useTestVariabiles();

    const updatedTeamMembers = TEAM_MEMBERS.map((member) => {
        if (member.name === 'Pavol Hejný' && pavolRole) {
            return { ...member, role: pavolRole };
        } else if (member.name === 'Jiří Jahn') {
            if (!jiriRole) {
                return null;
            } else {
                return { ...member, role: jiriRole };
            }
        }
        return member;
    }).filter((member) => member !== null) as TeamMember[]; // Filter out any null values

    const updatedTeamMembersWithBio = updatedTeamMembers.map((member) => {
        const [role, ...bioItems] = spaceTrim(member.role).split('\n');
        const bio = bioItems.join('\n');
        return { ...member, role, bio };
    });

    return (
        <section id="about-us" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container max-w-6xl mx-auto px-6 relative">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {updatedTeamMembersWithBio.map(
                        ({ name, role, bio, image, imagePosition, imageBackground, link }) => (
                            <Link href={link} key={name} target="_blank" rel="noopener noreferrer">
                                <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
                                    <CardHeader className="space-y-4">
                                        <div className="flex justify-center">
                                            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-colors">
                                                <Image
                                                    src={image}
                                                    alt={name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 128px) 100vw, 128px"
                                                    style={{
                                                        background: imageBackground || 'transparent',
                                                        objectPosition: imagePosition || 'center',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center space-y-2">
                                            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                                {name}
                                            </CardTitle>
                                            <CardDescription className="text-lg font-medium">
                                                <MarkdownContent>{role}</MarkdownContent>
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center text-muted-foreground">
                                        <MarkdownContent>{bio}</MarkdownContent>
                                    </CardContent>
                                </Card>
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
