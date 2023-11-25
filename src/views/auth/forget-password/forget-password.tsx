import { Button, Group, Paper, PasswordInput, PinInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FieldIcon, Trans } from '../../../components';
import { project } from '../../../configs';
import { useTrans } from '../../../hooks';

interface IFormEmail {
    email: string;
}

interface IFormCode {
    code: string;
}

interface IFormPassword {
    password: string;
    confirm_password: string;
}

const ForgetPassword = () => {
    const getTrans = useTrans();
    const [step, setStep] = useState<'email' | 'code' | 'password'>('email');
    const form_email_value: IFormEmail = {
        email: '',
    };
    const form_code_value: IFormCode = {
        code: '',
    };
    const form_new_password_value: IFormPassword = {
        password: '',
        confirm_password: '',
    };

    const form_email = useFormik({
        initialValues: form_email_value,
        onSubmit: (values) => console.log(values),
    });
    const form_code = useFormik({
        initialValues: form_code_value,
        onSubmit: (values) => console.log(values),
    });
    const form_password = useFormik({
        initialValues: form_new_password_value,
        onSubmit: (values) => console.log(values),
    });

    return (
        <>
            <Title ta="center">
                <Trans
                    alias="auth.forget.title"
                    fallback="Recover your account's password!"
                />
            </Title>

            <Paper
                withBorder
                my={30}
                p={30}
                radius="md"
                shadow="md"
            >
                {step === 'email' && (
                    <form onSubmit={form_email.handleSubmit}>
                        <TextInput
                            required
                            id="email"
                            label={getTrans('field.email')}
                            leftSection={<FieldIcon field="email" />}
                            name="email"
                            placeholder={getTrans('placeholder.email')}
                            type="email"
                            value={form_email.values.email}
                            onChange={form_email.handleChange}
                        />
                        <Button
                            fullWidth
                            mt="xl"
                            type="submit"
                            onClick={() => setStep(() => 'code')}
                        >
                            <Trans
                                alias="button.send_code"
                                fallback="Send Code"
                            />
                        </Button>
                    </form>
                )}

                {step === 'code' && (
                    <form onSubmit={form_code.handleSubmit}>
                        <Text
                            mb="md"
                            ta="center"
                        >
                            <Trans
                                alias="auth.forget.enter_code"
                                fallback="Enter confirmation code"
                            />
                        </Text>
                        <Group justify="center">
                            <PinInput
                                id="code"
                                name="code"
                                type="number"
                                value={form_code.values.code}
                                onChange={form_code.handleChange}
                            />
                        </Group>
                        <Button
                            fullWidth
                            mt="xl"
                            type="submit"
                            onClick={() => setStep(() => 'password')}
                        >
                            <Trans
                                alias="button.next"
                                fallback="Next Step"
                            />
                        </Button>
                    </form>
                )}

                {step === 'password' && (
                    <form onSubmit={form_password.handleSubmit}>
                        <Stack gap="sm">
                            <PasswordInput
                                required
                                id="password"
                                label={getTrans('field.password')}
                                leftSection={<FieldIcon field="password" />}
                                name="password"
                                value={form_password.values.password}
                                onChange={form_password.handleChange}
                            />
                            <PasswordInput
                                required
                                id="confirm_password"
                                label={getTrans('field.confirm_password')}
                                leftSection={<FieldIcon field="password" />}
                                name="confirm_password"
                                value={form_password.values.confirm_password}
                                onChange={form_password.handleChange}
                            />
                        </Stack>
                        <Button
                            fullWidth
                            mt="xl"
                            type="submit"
                            onClick={() => setStep(() => 'email')}
                        >
                            <Trans
                                alias="button.set_new_password"
                                fallback="Login"
                            />
                        </Button>
                    </form>
                )}
            </Paper>

            <Text
                c="dimmed"
                mt={5}
                size="sm"
                ta="center"
            >
                <Trans
                    alias="auth.forget.remember_password"
                    fallback="Find your password?"
                />
                {' '}
                <Link to={`${project.routes.auth.prefix}/${project.routes.auth.login}`}>
                    <Trans
                        alias="auth.forget.login_to_account"
                        fallback="Sign in to your account."
                    />
                </Link>
            </Text>
        </>
    );
};

export default ForgetPassword;
