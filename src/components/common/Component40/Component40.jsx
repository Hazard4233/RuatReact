import { useState } from 'react'
import {
    FaIndent,
    FaOutdent,
    BsDownload,
    BsFullscreen
} from '../../icon/IconImage'
import SelectInput from '../../ui/SelectInput'
import BarLineChart from '../BarLineChart'
import NavBar from "../NavBar"

const Component40 = () => {

    let navItems = [
        { title: 'CATEGORY 1', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 2', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 3', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 4', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 5', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
        { title: 'CATEGORY 6', items: new Array(7).fill({title: 'Sample Text', link: ''}) },
    ]
    let data_1 = [0,1,2,3,4,5,6,7,8]
    let data_2 = [8649, 10127, 2313, 678, 321, 11640, 12761, 2008, 887]
    let data_3 = [-609, -598, 387, 112, -22, -110, -233, -63, 60]
    let data_4 = [63.4, 74.2, 16.9, 5.0, 2.4, 85.3, 93.5, 14.7, 6.5]
    let data_5 = [12, 45, 78, 28, 74, 66, 43, "-", "-"]
    let data_6 = [
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
    ]
    let data_7 = [-609, -598, 387, 112, -22, -110, -233, -63, 60, 112, -22, -110,]
    let data_8 = [
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
        { title: 'Text', value: 8649 },
        { title: 'Text', value: 10217 },
        { title: 'Text', value: 2313 },
    ]
    let data_9 = [-609, -598, 387, 112, -22, -110]
    let chart_option = ["All", "Item 1", "Item 2", "Item 3"]

    let chart_data = {
        line1_data: [],
        line2_data: [],
        bar_data: []
    }
    for (let index = 0; index < 100; index++) {
        chart_data.line1_data.push(Math.floor(Math.random() * 350))
        chart_data.line2_data.push(Math.floor(Math.random() * 250))
        chart_data.bar_data.push(Math.floor(Math.random() * 100))
    }
    
    
    const [enableNavBar, setEnableNavBar] = useState(true)
    const [currentCategory, setCurrentCategory] = useState(navItems[0])
    const [enableChartOption, setEnableChartOption] = useState(chart_option[0])
    const [enableChart, setEnableChart] = useState(true)
    
    const navBarHandler = () => {
        setEnableNavBar(!enableNavBar)
        setEnableChart(false)
        setTimeout(() => {
            setEnableChart(true)
        }, 10);
    }

    return (
        <div className="items-stretch rounded-lg shadow-card dark:shadow-dark_card
                        block sm:flex">
            {/* navbar */}
            <div className={`${enableNavBar === true ? 'hidden sm:block' : 'hidden'}`}>
                <NavBar navItems={navItems} />
            </div>
            <div className="flex sm:hidden flex-col">
                <div className="flex items-center">
                    <div className="font-semibold text-xs mr-auto">Category</div>
                    <SelectInput 
                        className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-5_5 sm:h-7_5
                                w-40
                                text-9px sm:text-xs"
                        option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-8 z-10"
                        option_li={navItems} 
                        default_option={navItems[0]}
                        returnVal={setCurrentCategory}
                    />
                </div>
                <div className="mt-4 flex items-center">
                    <div className="font-semibold text-xs mr-auto">Sub-Category</div>
                    {/* <SelectInput 
                        className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-lg
                                border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                h-5_5 sm:h-7_5
                                w-40
                                text-9px sm:text-xs"
                        option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-8 z-10"
                        option_li={currentCategory.items} 
                        default_option={currentSubCategory[0]}
                        returnVal={setCurrentSubCategory}
                    /> */}
                </div>
            </div>

            {/* main part */}
            <div className="flex-1 flex flex-col px-5 py-5
                        bg-white dark:bg-transparent text-black dark:text-white
                        mt-7_5 sm:mt-0">
                <div className="flex items-center">
                    <div className="cursor-pointer transform hover:scale-105 ease-out duration-700">
                        {enableNavBar && 
                            <div onClick={() => {navBarHandler()}}>
                                <FaOutdent className="text-black dark:text-dark_0fc9f2" />
                            </div>
                        }
                        {!enableNavBar &&
                            <div onClick={() => {navBarHandler()}}>
                                <FaIndent className="text-black dark:text-dark_0fc9f2" />
                            </div>
                        }
                    </div>
                    <div className="ml-5 font-semibold text-lg sm:text-22px">Heading Title</div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                {/* table part */}
                <div className="mt-4_5 flex flex-col">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-9 h-8 gap-x-0.5">
                            <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-2 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_1.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>Text</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_2.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">(Title<span className="text-c_C85151">-173</span>)</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_3.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                    ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5">
                            <div className="col-span-9 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_4.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}%</div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            <div className="col-span-5 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                            <div className="col-span-4 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        </div>
                        <div className="grid grid-cols-9 h-8 mt-0.5 gap-x-0.5">
                            {data_5.map((item, index) => {
                                return (
                                    <div key={`item_${index}`} 
                                        className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item}</div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>


                <div className="w-full h-px mt-9 mb-7 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-2 text-11px text-c_6E7582 font-semibold">(Sample Text)</div>
                    <div className="ml-auto">
                        <BsDownload className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>


                <div className="flex flex-col mt-5_5">
                    <div className="grid grid-cols-12 h-8 gap-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_6.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item.title}</div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_6.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item.value).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-12 h-8 mt-0.5">
                        <div className="col-span-12 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        {data_7.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                    </div>

                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_8.map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{item.title}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 gap-x-0.5 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_8.map((item, index) => {
                            return (
                                <div key={`item1_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px text-c_6E7582 dark:text-white bg-c_F8F9FB dark:bg-transparent`}>{Number(item.value).toLocaleString()}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>

                    
                    <div className="grid grid-cols-12 h-8 mt-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        <div className="col-span-6 flex justify-center items-center font-semibold text-xs bg-c_E8EBF1 dark:bg-gray-700">Title</div>
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-12 h-8 mt-0.5 gap-x-0.5">
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                        {data_9.map((item, index) => {
                            return (
                                <div key={`item_${index}`} 
                                    className={`flex items-center justify-center font-semibold text-11px bg-c_F8F9FB dark:bg-transparent
                                                ${item < 0 ? 'text-c_C85151' : 'text-c_64A879'}`}>{item >= 0 ? '+' : ''}{Number(item).toLocaleString()}</div>
                            )
                        })}
                        <div className="col-span-3 flex justify-center items-center font-semibold text-xs bg-transparent"></div>
                    </div>
                    
                </div>
                

                <div className="w-full h-px mt-7_5 mb-7 bg-c_F2F2F2 dark:bg-dark_0fc9f2"></div>


                <div className="flex items-center">
                    <div className="font-semibold text-sm">Sed ut perspiciatis unde omnis</div>
                    <div className="ml-auto flex items-center">
                        <label className="font-semibold text-sm mr-2">Sample Text</label>
                        <SelectInput 
                            className="flex items-center px-3 text-c_6E7582 dark:text-dark_0fc9f2 font-semibold border rounded-md
                                    border-c_E8EBF1 dark:border-dark_0fc9f2 bg-white dark:bg-transparent
                                    h-5_5 sm:h-7_5
                                    w-27
                                    text-9px sm:text-xs"
                            option_board_class="bg-white dark:bg-gray-900 top-8 z-10"
                            option_li={chart_option} 
                            default_option={chart_option[0]}
                            returnVal={setEnableChartOption}
                        />
                    </div>
                    <div className="ml-10 flex items-center">
                        <BsFullscreen className="stroke-1 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                        <BsDownload className="stroke-1 ml-5 cursor-pointer transform hover:scale-105 ease-out duration-700 text-black dark:text-dark_0fc9f2" />
                    </div>
                </div>

                {enableChart && <BarLineChart chart_data={chart_data} enable_chart_option_btn_group={false} />}
                
            </div>
        </div>
    )
}

export default Component40