import React from 'react'


const Tabs = (props)=>{

    const {tabList, setTabList, activeTab, setActiveTab} = props;

    const activateTab = (tabIndex) =>{
        setActiveTab(tabIndex)
    }


    return(
        <div>
            {
                tabList.map((tab, index)=>(
                    <p style={{margin: '5px', border:'4px solid black'}}
                    onClick={()=>activateTab(index)}
                    >
                        {tab.label}
                    </p>
                ))

            }
        </div>
    )
}


export default Tabs;