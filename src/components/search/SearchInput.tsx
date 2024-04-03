import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { SearchElement, SearchWrapper } from "./SearchInputElements"

interface ISearchInputProps {
  query?: string
  className?: string
}

export const SearchInput = ({
  query,
  ...props
}: ISearchInputProps): JSX.Element => {
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
    <SearchWrapper {...props}>
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
