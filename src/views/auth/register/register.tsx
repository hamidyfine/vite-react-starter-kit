import '@mantine/dates/styles.css';

import { Button, Group, Paper, PasswordInput, Radio, Stack, Text, TextInput, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { FieldIcon, Trans } from '../../../components';
import { project } from '../../../configs';
import { useTrans } from '../../../hooks';

interface IFormData {
    first_name: string;
    last_name: string;
    gender: string;
    dob: Date | null;
    email: string;
    password: string;
}

const Register = () => {
    const getTrans = useTrans();
    const form_initial_values: IFormData = {
        first_name: '',
        last_name: '',
        gender: '',
        dob: null,
        email: '',
        password: '',
    };
    const formik = useFormik({
        initialValues: form_initial_values,
        onSubmit: (values) => console.log(values),
    });

    const onFormValueChanged = (slug: string, value: unknown | null) => {
        formik.setFieldValue(slug, value);
    };

    return (
        <>
            <Title ta="center">
                <Trans
                    alias="auth.register.title"
                    fallback="Start Listing your Movies!"
                />
            </Title>

            <Paper
                withBorder
                my={30}
                p={30}
                radius="md"
                shadow="md"
            >
                <form onSubmit={formik.handleSubmit}>
                    <Stack gap="sm">
                        <TextInput
                            required
                            id="first_name"
                            label={getTrans('field.first_name')}
                            leftSection={<FieldIcon field="user" />}
                            name="first_name"
                            placeholder={getTrans('placeholder.first_name')}
                            type="text"
                            value={formik.values.first_name}
                            onChange={formik.handleChange}
                        />
                        <TextInput
                            required
                            id="last_name"
                            label={getTrans('field.last_name')}
                            leftSection={<FieldIcon field="user" />}
                            name="last_name"
                            placeholder={getTrans('placeholder.last_name')}
                            type="text"
                            value={formik.values.last_name}
                            onChange={formik.handleChange}
                        />
                        <Radio.Group
                            withAsterisk
                            id="gender"
                            label={getTrans('field.gender')}
                            name="gender"
                            value={formik.values.gender}
                            onChange={(v) => onFormValueChanged('gender', v)}
                        >
                            <Group
                                grow
                                mt="xs"
                            >
                                <Radio
                                    label="Female"
                                    value="female"
                                />
                                <Radio
                                    label="Male"
                                    value="male"
                                />
                                <Radio
                                    label="Not Specify"
                                    value="ns"
                                />
                            </Group>
                        </Radio.Group>
                        <DateInput
                            id="dob"
                            label={getTrans('field.dob')}
                            leftSection={<FieldIcon field="dob" />}
                            maxDate={new Date()}
                            name="dob"
                            placeholder={getTrans('placeholder.dob')}
                            value={formik.values.dob}
                            valueFormat="YYYY/MM/DD"
                            onChange={(v) => onFormValueChanged('dob', v)}
                        />
                        <TextInput
                            required
                            id="email"
                            label={getTrans('field.email')}
                            leftSection={<FieldIcon field="email" />}
                            name="email"
                            placeholder={getTrans('placeholder.email')}
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <PasswordInput
                            required
                            id="password"
                            label={getTrans('field.password')}
                            leftSection={<FieldIcon field="password" />}
                            name="password"
                            placeholder={getTrans('placeholder.password')}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </Stack>
                    <Button
                        fullWidth
                        mt="xl"
                        type="submit"
                    >
                        <Trans
                            alias="button.login"
                            fallback="Login"
                        />
                    </Button>
                </form>
            </Paper>

            <Text
                c="dimmed"
                mt={5}
                size="sm"
                ta="center"
            >
                <Trans
                    alias="auth.register.have_account"
                    fallback="Do have an account?"
                />
                {' '}
                <Link to={`${project.routes.auth.prefix}/${project.routes.auth.login}`}>
                    <Trans
                        alias="auth.register.login_to_account"
                        fallback="Sign in to your account."
                    />
                </Link>
            </Text>
        </>
    );
};

export default Register;
