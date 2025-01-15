import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}


// React Server Component
// 서버측에서만 실행되는 컴포넌트 (브라우저에서 실행 X)
// 페이지의 대부분을 서버 컴포넌트로 구성할 것을 권장. 클라이언트 컴포넌트는 꼭 필요한 경우에만 사용할 것
// 앱라우터에서는 기본적으로 모든 페이지는 서버 컴포넌트임
// 상호작용(JS를 사용하는)이 있으면 클라이언트 컴포넌트. 없으면 서버 컴포넌트로

// React Client Component
// JS Bundle에 포함되는 컴포넌트



/*
  * 서버 컴포넌트 주의사항
   1. 서버 컴포넌트에는 브라우저에서 실행될 코드가 포함되면 안된다.
      - 서버 컴포넌트는 JS Bundle에 포함되지 않기 때문에.

   2. 클라이언트 컴포넌트는 클라이언트에서만 실행되지 않는다.
      - 서버(Pre-Rendering)와 브라우저(Hydration) 양쪽에서 한번씩 실행된다.

   3. 클라이언트 컴포넌트에서 서버 컴포넌트를 import 할 수 없다.
      - 클라이언트 컴포넌트의 코드는 서버와 브라우저에서 모두 실행되지만
      - 서버 컴포넌트 코드는 오직 서버에서만 실행 됨.
      - 즉 브라우저에서 클라이언트 컴포넌트에서의 서버 컴포넌트 코드를 import 하려고 하면 JS bundle에 포함되어 있지 않기 때문에 안됨.
      - 이런 경우 Next.js는 자동으로 서버 컴포넌트를 클라이언트 컴포넌트로 변경함
      - import 하지말고 children으로 전달해서 렌더링만 하자

   4. 서버 컴포넌트에서 클라이언트 컴포넌트에게 직렬화 되지 않는 Props는 전달 불가하다.
      - 함수는 직렬화가 불가능 함. Props로 못넘김.
*/


/*
  * 사전 렌더링 과정
  페이지를 구성하는 모든 컴포넌트들 -> 서버 컴포넌트들만 따로 실행(RSC Payload로 만듦) -> 완성된 HTML 페이지  

  * RSC Payload
  - React Server Component의 순수한 데이터(결과물)
  - React Server Component를 직렬화 한 결과

  * RSC Payload에는 서버 컴포넌트의 모든 데이터가 포함된다.
  - 서버 컴포넌트의 렌더링 결과
  - 연결된 클라이언트 컴포넌트의 위치
  - 클라이언트 컴포넌트에게 전달하는 Props 값
*/



/*
  Pre-Fetching
  - Static 페이지는 RSC Payload와 JS Bundle 모두 Pre-Fetching
  - Dynamic 페이지는 RSC Payload 만 Pre-Fetching 하고 실제로 동작할때 JS Bundle을 받아옴 (기본적으로는)
*/