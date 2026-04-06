import ToolsBar from './ToolsBar';
import Table from './Table';

function MainContent(){
    return(
        <div className="w-full flex flex-col gap-5 bg-(--neutral-100) snap-x">
            <ToolsBar/>
            <Table/>
        </div>
    );
};

export default MainContent;