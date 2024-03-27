// Styled
import * as S from '@/styles/group/create.style';
// React
import { useEffect, useRef, useState, ChangeEvent } from 'react';

const GroupCreateComponent = () => {
  const [src, setSrc] = useState<string>('/image/noimage.png');
  const fileDOM = useRef<HTMLInputElement | null>(null);

  const uploadBtn = () => {
    if (fileDOM.current) {
      fileDOM.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageSrc = URL.createObjectURL(file);

      if (imageSrc) {
        setSrc(imageSrc);
      }
    }
  };

  useEffect(() => {
    if (fileDOM.current) {
      fileDOM.current.addEventListener(
        'change',
        handleFileChange as unknown as EventListener
      );
    }

    return () => {
      if (fileDOM.current) {
        URL.revokeObjectURL(src);
      }
    };
  }, [src]);

  return (
    <S.CreateLayout>
      <div className="input-area-1">
        <div className="input-image">
          <S.LabelForFile $for="swal-input">
            <img
              className="preview"
              src={src}
              alt="image upload"
              onClick={uploadBtn}
            />
          </S.LabelForFile>
          <input type="file" id="img" ref={fileDOM} accept="image/*" />
        </div>
        <div className="input-title">
          <label htmlFor="swal-input1">소속 이름</label>
          <input
            type="text"
            id="name"
            placeholder="소속의 이름을 입력해주세요."
          />
        </div>
      </div>
      <div className="input-area-2">
        <div className="input-description">
          <label htmlFor="swal-input2">소속 소개</label>
          <textarea
            id="description"
            className="input-description"
            placeholder="소속의 소개를 적어주세요."
          />
        </div>
      </div>
    </S.CreateLayout>
  );
};

export default GroupCreateComponent;
