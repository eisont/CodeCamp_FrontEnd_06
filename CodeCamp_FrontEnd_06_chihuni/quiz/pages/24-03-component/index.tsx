import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';
import Input01 from '../../src/commons/inputs/01';
import Button01 from '../../src/commons/buttons/01';

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

const schema = yup.object({
  writer: yup.string().max(5, '5글자 이내입니다.').required('작성자는 반드시 작성해야 합니다.'),
  password: yup.string().max(8, '8글자 이내입니다.').required('비밀번호는 반드시 작성해야 합니다.'),
  title: yup.string().max(100, '100글자 이내입니다.').required('제목은 반드시 작성해야 합니다.'),
  contents: yup.string().max(1000, '1000글자 이내입니다.').required('내용은 반드시 작성해야 합니다.'),
});

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };
  console.log('리렌더링 체크!!');

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <Input01 type='text' register={register('writer')} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 : <Input01 type='password' register={register('password')} />
      <Error>{formState.errors.password?.message}</Error>
      제목 : <Input01 type='text' register={register('title')} />
      <Error>{formState.errors.title?.message}</Error>
      내용 : <Input01 type='text' register={register('contents')} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 isActive={formState.isValid} title='로그인하기' />
    </form>
  );
}
