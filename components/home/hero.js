import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          고민을 발굴하는 개발자,
          <br />
          강태준입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          너의 인간에 것이 말이다. 새 우리는 그들의 때문이다. 우리의 가장 이상의
          부패뿐이다. 같으며, 있을 하였으며, 황금시대다. 광야에서 열매를 눈에
          미인을 싶이 얼마나 뼈 것이다. 인간이 가치를 소리다.이것은 역사를 크고
          더운지라 몸이 천지는 같지 이것이다. 가슴이 꽃이 거선의 청춘은 품에
          구할 청춘의 피가 풀이 때문이다. 작고 인간의 대중을 산야에 튼튼하며,
          이상이 피에 아름답고 타오르고 철환하였는가? 이것을 위하여서, 인간의
          아름다우냐?
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
    </>
  );
}
