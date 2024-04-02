import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { SearchElement, SearchWrapper } from "./SearchInputElements"

export const SearchInput = ({ query }: { query?: string }): JSX.Element => {
  const router = useRouter()
  const [value, setInputValue] = useState(query || "")

  const handleSearch = () => {
    if (value.length) {
      const params = new URLSearchParams()
      params.append("query", value as string)

      router.push(`/search?${params.toString()}`)
    } else {
      router.pathname !== "/" ? router.push("/") : null
    }
  }
  return (
    <SearchWrapper>
      <SearchElement
        placeholder="Buscar filme pelo nome"
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleSearch}
      />
      <button onClick={handleSearch}>
        <Image
          src="/magnifier.svg"
          alt="Magnifier glass"
          height={18}
          width={18}
        />
      </button>
    </SearchWrapper>
  )
}
