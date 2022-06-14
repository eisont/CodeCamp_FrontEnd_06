import { UploadButton, UploadFileHidden, UploadImage } from './Uploads01.styled';
import { IUploads01UIProps } from './Uploads01.types';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={`https://storage.googleapis.com/${props.fileUrl}`} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <PlusCircleOutlined />
        </UploadButton>
      )}
      {/* display: none */}
      <UploadFileHidden type='file' ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
