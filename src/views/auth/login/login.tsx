import { Button, Checkbox, Group, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import { FieldIcon, Trans } from '../../../components';
import { project } from '../../../configs';
import { useTrans } from '../../../hooks';

interface IFormData {
    email: string;
    password: string;
    remember: boolean;
}

const Login = () => {
    const getTrans = useTrans();
    const form_initial_values: IFormData = {
        email: '',
        password: '',
        remember: false,
    };
    const formik = useFormik({
        initialValues: form_initial_values,
        onSubmit: (values) => console.log(values),
    });

    return (
        <>
            <Title ta="center">
                <Trans
                    alias="auth.login.title"
                    fallback="Welcome Back!"
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
                    {(project.auth.has_recover_password_option || project.auth.has_remember_me_option) && (
                        <Group
                            justify={!project.auth.has_remember_me_option ? 'flex-end' : 'space-between'}
                            mt="lg"
                        >
                            {project.auth.has_remember_me_option && (
                                <Checkbox
                                    checked={formik.values.remember}
                                    id="remember"
                                    label={getTrans('field.remember')}
                                    onChange={formik.handleChange}
                                />
                            )}

                            {project.auth.has_recover_password_option && (
                                <Link to={`${project.route.auth.prefix}/${project.route.auth.forget}`}>
                                    <Text size="sm">
                                        <Trans
                                            alias="auth.login.forget_password"
                                            fallback="Forget Password?"
                                        />
                                    </Text>
                                </Link>
                            )}
                        </Group>
                    )}
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
                    alias="auth.login.don_t_have_account"
                    fallback="Do not have an account yet?"
                />
                {' '}
                <Link to={`${project.route.auth.prefix}/${project.route.auth.register}`}>
                    <Trans
                        alias="auth.login.create_account"
                        fallback="Create account"
                    />
                </Link>
            </Text>
        </>
    );
};

export default Login;
