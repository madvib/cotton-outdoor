import { useModal } from "@lib/context/modal-context"
import InteractiveLink from "@modules/common/components/interactive-link"
import { useHits, useSearchBox } from "react-instantsearch-hooks-web"

const ShowAll = ({ close }: { close: () => void }) => {
  const { hits } = useHits()
  const { query } = useSearchBox()

  if (query === "") return null
  if (hits.length > 0 && hits.length <= 6) return null

  if (hits.length === 0) {
    return (
      <div className="flex gap-2 justify-center h-fit py-2">
        <p>No results found.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <p>Showing the first 6 results.</p>
      <InteractiveLink href={`/search/${query}`} onClick={close}>
        View all
      </InteractiveLink>
    </div>
  )
}

export default ShowAll
