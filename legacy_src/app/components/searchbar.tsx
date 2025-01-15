"use client"   // 클라이언트 컴포넌트로 선언

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        router.push(`/search?q=${search}`);
    };

    return (
        <div>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력해주세요..."/>
            <button onClick={onSubmit}>검색</button>
        </div>
    )
}