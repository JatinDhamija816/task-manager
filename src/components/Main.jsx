import Header from "./Header"
import Filter from "./Main/Filter"
import Completed from "./Main/Task/Completed"
import Deffered from "./Main/Task/Deffered"
import Deployed from "./Main/Task/Deployed"
import Pending from "./Main/Task/Pending"
import Progress from "./Main/Task/Progress"

const Main = () => {
    return (
        <>
            <Header />
            <div className="w-11/12 m-auto border border-white rounded-lg md:max-w-full">
                <Filter />
                <div className="flex justify-evenly mx-5 md:min-w-">
                    <div className="m-1 p-1 w-1/5 md:min-w-fit">
                        <Pending />
                    </div>
                    <div className="m-1 p-1 w-1/5 md:min-w-fit">
                        <Progress />
                    </div>
                    <div className="m-1 p-1 w-1/5 md:min-w-fit">
                        <Completed />
                    </div>
                    <div className="m-1 p-1 w-1/5 md:min-w-fit">
                        <Deployed />
                    </div>
                    <div className="m-1 p-1 w-1/5 md:min-w-fit">
                        <Deffered />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
