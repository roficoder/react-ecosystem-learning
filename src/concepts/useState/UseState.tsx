import { FC, useEffect, useState } from 'react'
import { ImportantNotes, HeaderDiv, CommonButton } from '../../style'
import useData from '../useHooks'
import { CommonDataDTO } from '../../models/common-data';
import { useLocation, useNavigate } from 'react-router-dom';

const UseState: FC = () => {
    const { getCommonData } = useData();
    const [data, setData] = useState<CommonDataDTO>();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const route = location.pathname;
        getCommonData(setData, route);  
    }, [])

  return (
      <>
          <HeaderDiv>
          <h1>{data?.name}</h1>
            <CommonButton onClick={() => navigate(-1)}>Back</CommonButton>
          </HeaderDiv>
          <ImportantNotes>
              {data?.notes?.map((note, index) => {
                  return (
                      <>
                          <li>{note}</li>
                      </>
                  )
              })}
              <hr />
              {
                  data?.codeGuide?.map((code, index) => {
                      return (
                          <>
                              <p>{code.content}</p>
                              {
                                  code?.images.map((image, index) => {
                                      return (
                                          <>
                                            <img src={image} alt="" />
                                          </>
                                    )
                                })
                              }
                          </>
                      )
                  })
              }
          </ImportantNotes>
      </>
  )
}

export default UseState