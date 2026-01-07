//자기소개 페이지
/**
 *  솔로프리너를 꿈꾸는 프론트엔드 개발자 입니다.
 * 나이 : 31살 (96년생)
 * 좋아하는 음식 : 일식
 * 취미 : 카페가기, OTT 감상 , 음악 감상
 */
import { Link } from "gatsby";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h2>자기소개</h2>
      <Link to="/">메인 페이지로</Link>
      <p>솔로프리너를 꿈꾸는 프론트엔드 개발자 입니다.</p>
      <p>좋아하는 음식 : 일식</p>
      <p>취미 : 카페가기, OTT 감상 , 음악 감상</p>
    </div>
  );
};
export const Head = () => <title>자기소개 페이지</title>;
export default AboutPage;
