import type { Event } from '../model/event/Event';

export const fetchEvents = async (): Promise<Event[]> => {
    return [
        {
            description: 'Beschrijving',
            title: 'Titel van event',
            slug: 'event-1',
            id: '1',
        },
        {
            description: 'Beschrijving 2',
            title: 'Titel van tweede event',
            slug: 'event-2',
            id: '2',
        },
    ];
};

export const fetchEvent = async (id: string, slug: string): Promise<Event> => {
    return {
        id,
        slug,
        title: `Some title for event with id: ${id}`,
        description: `Some description for event with id: ${id}`,
    };
};
