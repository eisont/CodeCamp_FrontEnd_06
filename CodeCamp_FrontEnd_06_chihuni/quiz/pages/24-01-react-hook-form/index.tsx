import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  // const [writer, setWriter] = useState('');
  // const [password, setPassword] = useState('');
  // const [title, setTitle] = useState('');
  // const [contents, setContents] = useState('');
  // const [writererror, setWritererror] = useState('');
  // const [passworderror, setPassworderror] = useState('');
  // const [titleerror, setTitleerror] = useState('');
  // const [contentserror, setContentserror] = useState('');

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
    //   if (writer === '') {
    //     setWritererror('작성자를 입력해주세요.');
    //   } else {
    //     setWritererror('');
    //   }
    //   if (password === '') {
    //     setPassworderror('비밀번호를 입력해주세요.');
    //   } else {
    //     setPassworderror('');
    //   }
    //   if (title === '') {
    //     setTitleerror('제목을 입력해주세요.');
    //   } else {
    //     setTitleerror('');
    //   }
    //   if (contents === '') {
    //     setContentserror('내용을 입력해주세요.');
    //   } else {
    //     setContentserror('');
    //   }
    // };
    // const Wwriter = (event) => {
    //   setWriter(event.target.value);
    //   // if (writer !== '') {
    //   //   setWritererror('');
    //   // }
    // };
    // const Ppassword = (event) => {
    //   setPassword(event.target.value);
    //   // if (password !== '') {
    //   //   setPassworderror('');
    //   // }
    // };
    // const Ttitle = (event) => {
    //   setTitle(event.target.value);
    //   // if (title !== '') {
    //   //   setTitleerror('');
    //   // }
    // };
    // const Ccontents = (event) => {
    //   setContents(event.target.value);
    //   // if (contents !== '') {
    //   //   setContentserror('');
    //   // }
  };
  console.log('리렌더링 체크!!');

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 :{' '}
      <input
        // onChange={Wwriter}
        type='text'
        {...register('writer')}
      />
      {/* <div>{writererror}</div> */}
      비밀번호 :{' '}
      <input
        // onChange={Ppassword}
        type='password'
        {...register('password')}
      />
      {/* <div>{passworderror}</div> */}
      제목 :{' '}
      <input
        // onChange={Ttitle}
        type='text'
        {...register('title')}
      />
      {/* <div>{titleerror}</div> */}
      내용 :{' '}
      <input
        // onChange={Ccontents}
        type='text'
        {...register('contents')}
      />
      {/* <div>{contentserror}</div> */}
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>등록하기</button>
    </form>
  );
}
