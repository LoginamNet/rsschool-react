import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCardQuery } from 'reducers/api.reducer';
import { setModalClose } from 'reducers/modal.reducer';
import './MainModal.css';

import { Loading } from 'components/loading/Loading';

import { RootState } from 'store';

export function MainModal() {
  const dispatch = useDispatch();

  const id = useSelector((state: RootState) => state.mainModal.value.id);
  const isModalOpen = useSelector((state: RootState) => state.mainModal.value.isModalOpen);
  const { data, isFetching } = useGetCardQuery(id);

  return (
    <div
      className={`mainModalContainer ${isModalOpen && 'mainModalContainerOpen'}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        dispatch(setModalClose());
      }}
      role="mainmodalback"
    >
      <div className={`mainModal ${isModalOpen && 'mainModalOpen'}`}>
        {isFetching ? (
          <Loading />
        ) : (
          data.id && (
            <div>
              <div className="mainModalData">
                <div
                  className="mainModalImage"
                  style={{
                    backgroundImage: `url(${data && data.urls.regular})`,
                    boxShadow: `5px 5px 0 0 ${data && data.color}`,
                  }}
                ></div>
                <div className="mainModalInfo">
                  <h2 className="mainModalHeader">{data && data.user.name.toUpperCase()}</h2>
                  <span className="mainModalLocation">
                    {data && (data.user.location || 'Unknown location')}
                  </span>
                  <span className="mainModalSize">
                    Size (W/H): {data && `${data.width}px / ${data.height}px`}
                  </span>
                  <span className="mainModalDate">
                    Date: {data && data.created_at.slice(0, 10).split('-').reverse().join('-')}
                  </span>
                  <span className="mainModalLikes">Likes: {data && data.likes}</span>
                  <span className="mainModalDescription">
                    About:{' '}
                    {data &&
                      (data.description ||
                        `Author doesn't provide any description for that photo. Be free to use your imagination!`)}
                  </span>
                  <a
                    className="mainModalLink"
                    href={data && data.urls.raw}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open full size in new window
                  </a>
                </div>
              </div>
              <button
                className="mainModalButton"
                onClick={() => dispatch(setModalClose())}
                role="mainmodalclose"
              >
                X
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
