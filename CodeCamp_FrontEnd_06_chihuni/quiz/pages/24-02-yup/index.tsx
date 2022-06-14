import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

interface IProps {
  isActive: boolean;
}
const CreateBt = styled.button`
  background: ${(props: IProps) => (props.isActive ? 'yellow' : '')};
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
      작성자 : <input type='text' {...register('writer')} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호 : <input type='password' {...register('password')} />
      <Error>{formState.errors.password?.message}</Error>
      제목 : <input type='text' {...register('title')} />
      <Error>{formState.errors.title?.message}</Error>
      <Error>{formState.errors.password?.message}</Error>
      내용 : <input type='text' {...register('contents')} />
      <Error>{formState.errors.contents?.message}</Error>
      <CreateBt isActive={formState.isValid}>등록하기</CreateBt>
    </form>
  );
}
