// 1. /pages/quiz06/editor/writer/index.tsx 페이지를 만들고, 폼을 만들어 주세요.(react-hook-form 사용) ooo
// ⇒ 폼의 내용은 writer, password, title, contents 총 4가지 항목입니다.ooo
// 2. contents 부분은 react-quill 에디터를 사용해서 만들어 주세요.ooo
// ⇒ react-quill을 적용할 때 발생하는 SSR 이슈는 dynamic import를 활용해서 완료해서 주세요.ooo
// 3. [ 등록하기 ] 버튼을 누르면 게시물을 등록하고, /pages/quiz06/editor/detail/[id]/index.tsx 페이지로 이동시켜 주세요.ooo
import { gql, useMutation } from '@apollo/client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// import ReactQuill from 'react-quill';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function EditorWriterPage() {
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: 'onChange',
  });

  const onChangeReactQuill = (value: string) => {
    console.log(value);

    setValue('contents', value === '<p><br></p>' ? '' : value);

    trigger('contents');
  };
  // const [value, setValue] = useState('');
  // console.log(value);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert('모두 입력 부탁!!!');
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
      router.push(`../editor/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type='text' {...register('writer')} />
      비밀번호: <input type='password' {...register('password')} />
      제목: <input type='text' {...register('title')} />
      내용: <ReactQuill onChange={onChangeReactQuill} />
      <button>등록할껴?</button>
    </form>
  );
}
