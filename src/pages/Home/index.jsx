
import { DrinksList } from "../../components/DrinkList"
import { DrinkModalDetail } from "../../components/DrinkModalDetail"
import { SearchForm } from "../../components/SearchForm"

export const Home = () => {

    return (
        <>
            <SearchForm/>
            <DrinksList/>
            <DrinkModalDetail/>
        </>
    )
  }
  