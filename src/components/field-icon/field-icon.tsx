import { rem } from '@mantine/core';
import { IconCalendarEvent, IconLock, IconMail, IconUser } from '@tabler/icons-react';

interface IProps {
    field: 'email' | 'password' | 'user' | 'dob';
}

const FieldIcon = ({ field }: IProps) => {
    if (field === 'email') {
        return (
            <IconMail
                stroke={1.5}
                style={{ width: rem(18), height: rem(18) }}
            />
        );
    } else if (field === 'password') {
        return (
            <IconLock
                stroke={1.5}
                style={{ width: rem(18), height: rem(18) }}
            />
        );
    } else if (field === 'user') {
        return (
            <IconUser
                stroke={1.5}
                style={{ width: rem(18), height: rem(18) }}
            />
        );
    } else if (field === 'dob') {
        return (
            <IconCalendarEvent
                stroke={1.5}
                style={{ width: rem(18), height: rem(18) }}
            />
        );
    }

    return null;
};

export default FieldIcon;
