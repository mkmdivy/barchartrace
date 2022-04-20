import React, { useState, useCallback, forwardRef } from 'react';
import Select, { components } from 'react-select'
import './index.css';
import data from './data.json';
import renewablevariable from './renewablevariable.json';
import patentsvariable from './patentsvariable.json';
import startupvariable from './startupvariable.json';
import googlevariable from './googlevariable.json';
import optionsall from './option.json';
// import wordlist from './wordlist.json';
import classes from './Site.module.css';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton} from 'react-share';
// import { Badge, Chip } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import StackGrid from "react-stack-grid";
// import { Web, Videocam, Description, PictureAsPdf} from '@material-ui/icons';
// import ReactGA from 'react-ga';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import queryString from "query-string";
import { useLocation, useParams, useHistory } from 'react-router';
import { useCurrentPng } from "recharts-to-png";
import FileSaver from "file-saver";
import patents1 from './patents1.json'
import startup1 from './startup1.json'
import startup2 from './startup2.json'
import startup3 from './startup3.json'
import startup4 from './startup4.json'
import startup5 from './startup5.json'
import startup6 from './startup6.json'
import startup7 from './startup7.json'
import startup8 from './startup8.json'
import startup9 from './startup9.json'
import startup10 from './startup10.json'
import startup11 from './startup11.json'
import startup12 from './startup12.json'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = props => {

  
  const variablelist = {"renewable1":"variable","renewable2":"variable","renewable3":"variable","patents1":"Technology","patents2":"Technology","startup1":"sector","startup2":"sector","startup3":"sector","startup4":"technology_field","startup5":"sector","startup6":"sector","startup7":"sector","startup8":"technology_field","google1":"technology"}
  const valuelist = {"renewable1":"share of res in demand","renewable2":"share of res in demand","renewable3":"share of res in demand","patents1":"Value","patents2":"Share","startup1":"number_of_companies","startup2":"number_of_companies","startup3":"number_of_companies","startup4":"number_of_companies","startup5":"raised_amount_usd","startup6":"raised_amount_usd","startup7":"raised_amount_usd","startup8":"raised_amount_usd","google1":"value"}

  const [selectedOption, setSelectedOption] = useState([{value: 'AUS', label: 'Australia'}]);
  const [selectedOptionvar, setSelectedOptionvar] = useState({value: 'startup1', label: 'Energy'});
  const [selectedType, setSelectedType] = useState('startup');
  
  ////////////// Date set
  
  const date=new Date();
  const priorDate = new Date(new Date().setDate(date.getDate() - 90));
  // myPastDate.setDate(myPastDate.getDate() - 8);

  const [dateRange, setDateRange] = useState([priorDate,date]);
  console.log(date.getDate())
  const [startDate, endDate] = dateRange;

  const location = useLocation()
  const history = useHistory()
  const [getPng, { ref, isLoading }] = useCurrentPng();
  // let optionsvariable = []
  const optionsvariable = selectedType === "renewable"? renewablevariable : selectedType ==="patents"? patentsvariable : selectedType ==="startup"? startupvariable : googlevariable
  
  const queryoption =[]

  const queryparse = location.search===""?  "AUS" : queryString.parse(location.search).country 
  typeof queryparse==='string'? queryoption.push({value:queryparse,label:queryparse}) : queryparse.map(e => queryoption.push({value:e,label:e}))  
  const queryparsevar = location.search===""?  'startup1' : queryString.parse(location.search).type
  const queryoptionvar ={value:queryparsevar,label:optionsvariable.map(e=>e.value===queryparsevar? e.label : null)}

  
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={classes.buttonActivedownload2} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));


///////////////////////

// patents1.filter['Country_ISO3']
// patents1
// const selecteddb = startup1
// const selectedVariable="sector"
// const selectedValue="number_of_companies"



const selecteddb = queryoptionvar.value==="patents1"? patents1 : queryoptionvar.value==="startup1"? startup1 : queryoptionvar.value==="startup2"? startup2 : queryoptionvar.value==="startup3"? startup3 : queryoptionvar.value==="startup4"? startup4 :queryoptionvar.value==="startup5"? startup5 :queryoptionvar.value==="startup6"? startup6 :queryoptionvar.value==="startup7"? startup7 :queryoptionvar.value==="startup8"? startup8 : queryoptionvar.value==="startup9"? startup9 : queryoptionvar.value==="startup10"? startup10 : queryoptionvar.value==="startup11"? startup11 : startup12
const selectedVariable=variablelist[queryoptionvar.value]
const selectedValue=valuelist[queryoptionvar.value]



const sCountries = []
selecteddb.map(e => sCountries.push(e.Country_ISO3))
const options = optionsall.filter(e => sCountries.includes(e.value))

const filteredData = selecteddb.filter(e => e.Country_ISO3 === queryparse)


const selectedData = []
let keylists = []
filteredData.map(e => selectedData.some(f => f["Year"] == e.Year)? null : selectedData.push({"Year":e.Year,"Label":e.Year}))
filteredData.map(e => keylists.push(e[selectedVariable]))
filteredData.map(d => selectedData.map(e => e.Year === d.Year? e[d[selectedVariable]] = d[selectedValue] : null ))
keylists = [...new Set(keylists)]

console.log(selectedData)


  const data = [
    {
      month: '2015.01',
      a: 4000,
      b: 2400,
      c: 2400,
    },
    {
      month: '2015.02',
      a: 3000,
      b: 1398,
      c: 2210,
    },
    {
      month: '2015.03',
      a: 2000,
      b: 9800,
      c: 2290,
    },
    {
      month: '2015.04',
      a: 2780,
      b: 3908,
      c: 2000,
    },
    {
      month: '2015.05',
      a: 1890,
      b: 4800,
      c: 2181,
    },
    {
      month: '2015.06',
      a: 2390,
      b: 3800,
      c: 2500,
    },
    {
      month: '2015.07',
      a: 3490,
      b: 4300,
      c: 2100,
    },
  ];
  
  const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
  
  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;
  
    return toPercent(ratio, 2);
  };
  

///////////////////////////////



const handleDownload = useCallback(async () => {
  const png = await getPng();
  // Verify that png is not undefined
  if (png) {
    // Download with FileSaver
    FileSaver.saveAs(png, 'myChart.png');
  }
}, [getPng]);


const locale = "en"


const colorBasket = [
  "#a70000",
  "rgb(246,186,112)",
  "rgb(42,79,95)",  
  "rgb(67,107,101)",
  "rgb(133,163,147)",    
  "rgb(197,209,191)",
  "#F2DFD7",  
  "#d4c1ec",
  "#9f9fed",    
  "#736ced",
  "#bdc667",
  "#77966d",  
  "#626d58",
  "#544343",    
  "#56282d",
  ];  



// let varlist = selectedType === 'patents'? {"label":"haha","value":"hoho"} : null

const disableList = {
  "hv108":["Malawi 2012","Madagascar 2011","Madagascar 2013","Angola 2011","Madagascar 2016","Burkina Faso 2014","Angola 2006","Burkina Faso 2017","Malawi 2014","Uganda 2009","Malawi 2017","Ghana 2019","Mali 2010","Liberia 2009","Mali 2015","Liberia 2016","Mozambique 2018","Uganda 2014","Rwanda 2008","Kenya 2015","Senegal 2008","Uganda 2018","Sierra Leone 2016","Liberia 2011","Tanzania 2017","Ghana 2016","Togo 2017"],	
  "hv206":["Mali 2010"],		
  "hv207":["Mali 2010"],		
  "hv208":["Mali 2010"],	
  "hv209":["Ethiopia 2000","Malawi 2000","Mali 2010"],	
  "hv210"	:["Mali 2010"],	
  "hv211"	:["Mali 2010"],	
  "hv212"	:["Mali 2010"],	
  "hv225"	:["Mali 2010","Tanzania 2003","Senegal 2008","Angola 2011","Nigeria 2010","Liberia 2009","Angola 2006","Uganda 2009"],	
  "hv243a":["Kenya 2003","Guinea 2005","Uganda 2000","Benin 2001","Lesotho 2004","Cameroon 2004","Malawi 2000","Egypt 2003","Malawi 2004","Egypt 2005","Ethiopia 2000","Ethiopia 2005","Mali 2001","Tanzania 2003","Mali 2010","Egypt 2000","Morocco 2003","Ghana 2003","Namibia 2000","Senegal 2005","Nigeria 2003","Burkina Faso 2003","Rwanda 2005"],	
  "hv247":["Kenya 2008","Uganda 2011","Lesotho 2004","Angola 2011","Liberia 2009","Burkina Faso 2003","Malawi 2000","Democratic Republic of the Congo 2007","Uganda 2006","Malawi 2004","Egypt 2000","Mali 2001","Egypt 2005","Mali 2006","Mali 2010","Uganda 2000","Morocco 2003","Ghana 2003","Mozambique 2009","Kenya 2003","Namibia 2000","Benin 2001","Nigeria 2003","Egypt 2003","Nigeria 2010","Ethiopia 2005","Rwanda 2005","Angola 2006","Rwanda 2008","Ethiopia 2000","Senegal 2005","Cameroon 2004","Senegal 2008","Guinea 2005","South Africa 2017"],	
  "Education":["Malawi 2012","Madagascar 2011","Madagascar 2013","Angola 2011","Madagascar 2016","Burkina Faso 2017","Angola 2006","Malawi 2014","Malawi 2017","Ghana 2016","Mali 2010","Kenya 2015","Mali 2015","Liberia 2011","Mozambique 2018","Uganda 2018","Rwanda 2008","Uganda 2014","Senegal 2008","Liberia 2009","Sierra Leone 2016","Burkina Faso 2014","Tanzania 2017","Liberia 2016","Togo 2017","Ghana 2019","Uganda 2009"]
}

// options.map(e => disableList[selectedOptionvar.value].includes(e.value)? e.isDisabled=true : e.isDisabled=false)



const countrylist = []


queryoption.map(d=>countrylist.push(d.value))



  

  const styles = {    
    menu: (base, state) => {
        return {
            ...base,
            backgroundColor: "#ffffff",
            // backgroundColor: "#fef7e7",
            borderRadius: 0,
            boxShadow: 0,
            height: '572px',
            // opacity: ".9"
        }
    },
    option: (base, { isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isSelected ? "#a70000" : null,
        // color: isDisabled
        //   ? '#ccc'
        //   : isSelected
        //   ? chroma.contrast(color, 'white') > 2
        //     ? 'white'
        //     : 'black'
        //   : data.color,
        ':active': {
          // ...styles[':active'],
          // backgroundColor: isSelected ? "#a70000" : "#a70000",
          // opacity: isSelected ? ".4" : ".7",
          // color: isSelected ? "#fef7e7" : ".7",
        },
      }
    },
    menuList: (base, state) => {
        return {
            ...base,
            maxHeight: 'none',
            height: '100%',
        }
    },
    dropdownIndicator: (base, state) => {
      return { ...base,
        
      };
    },
    control: (base, state) => {
      return { ...base,
        isHidden: true, 
        boxShadow: 'none',
        backgroundColor: 'none',
        borderStyle: 'solid', 
        borderColor: '#449999',
        borderWidth: '0px',
        color: 'none', 
        "&:hover": { 
        }
      };
    },
    singleValue: (base, state) => {
      return {
        ...base,
        fontSize:'2rem',
        fontWeight:'600',
        color: '#212529',
      }
    },
    input: (base, state) => {
      return {
        ...base,
        fontSize:'2rem',
        fontWeight:'900',
        color: '#212529'
      }
    }
};


const IndicatorsContainer = props => {  
  return (
    <div className={classes.Control}>
      <div className={classes.ControlInfo}>
        <i className={classes["material-icons"]}> info </i>
        <div className={classes.InfoTooltip}>
            {"indicator explanation"}
        </div>
      </div>
      <components.IndicatorsContainer {...props} />
    </div>
  )
}


const renderTooltip = (props) => {
  if (props.active && props.payload !== null && props.payload[0] !== null) {
    let payload = props.payload[0].payload;
    let tooltip = null;    
          tooltip = selectedOptionvar.label==='Education completed in single years'? (
            <div className={classes.Tooltip}>            
              {props.payload.map((i, idx) => (
                <p
                  key={idx}
                  style={{
                    color: i.color,
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {i.dataKey}: {Math.round(i.value * 100) / 100} years
                </p>
              ))}
            </div>
          ) : (
            <div className={classes.Tooltip}>            
              {props.payload.map((i, idx) => (
                <p
                  key={idx}
                  style={{
                    color: i.color,
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {i.dataKey}: {Math.round(i.value * 1000) / 10}%
                </p>
              ))}
            </div>
          );
        

    return tooltip;
  }
}

const styleVar = {
  // indicatorSeparator: (base, state) => {

  // },
  menu: (base, state) => {
      return {
          ...base,
          backgroundColor: "white",
          borderRadius: 0,
          boxShadow: 0,
      }
  },
  menuList: (base, state) => {
      return {
          ...base,
      }
  },
  control: (base, state) => {
    return { ...base,
      isHidden: true, 
      boxShadow: 'none',
      backgroundColor: 'none',
      borderStyle: 'solid', 
      borderColor: '#449999',
      borderWidth: '0px',
      color: 'none', 
      "&:hover": { 
      }
    };
  },
  singleValue: (base, state) => {
    return {
      ...base,      
      color: '#212529',
      textAlign: "right",
    }
  },
  input: (base, state) => {
    return {
      ...base,
      color: '#212529'
    }
  },
  multiValue: (base, state) => {
    return {
      ...base,
      color: '#212529',
      textAlign: "right",
      backgroundColor: '#ffffff'
    }
  }
};

let renderLineChart = (
  <ResponsiveContainer height="100%" ref={ref}>     
        <AreaChart
          width={500}
          height={400}
          data={selectedData}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis tickFormatter={toPercent} />
          {/* <Legend/> */}
          <Tooltip/>          
          {keylists.map((e,f) => 
            <Area type="monotone" dataKey={e} stackId="1" stroke={colorBasket[f]} fill={colorBasket[f]} />  
            )}
          {/* <Area type="monotone" dataKey="All technologies (total patents)" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
          {/* <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
        </AreaChart>
  </ResponsiveContainer>
);

let buttonGroup = (
  <div className={classes.buttonGroup}>
    <div className={classes.datagroup}>
      <button className={selectedType === 'renewable'? classes.buttonActive : classes.button} onClick={() => handleChangeType('renewable',setSelectedType,history,queryparse,queryparsevar)}>Renewable energy</button>
      <button className={selectedType === 'patents'? classes.buttonActive : classes.button} onClick={() => handleChangeType('patents',setSelectedType,history,queryparse,queryparsevar)}>Patents</button>
      <button className={selectedType === 'startup'? classes.buttonActive : classes.button} onClick={() => handleChangeType('startup',setSelectedType,history,queryparse,queryparsevar)}>Start-ups</button>
      <button className={selectedType === 'google'? classes.buttonActive : classes.button} onClick={() => handleChangeType('google',setSelectedType,history,queryparse,queryparsevar)}>Google Trends</button>
    </div>
    {/* <div className={classes.socialgroup}>
      <TwitterShareButton
        url={"https://mkmdivy.github.io/barchartrace/"+location.search}
        title={"The Economic Power of Africa's cities \n" + selectedOptionvar.label + ":" + queryparse.toString() + "\n" + "Explore more here:"}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={38}
          bgStyle={{ fill: 'white'}} iconFillColor='#00ACEE'
          round
           />
      </TwitterShareButton>
      <FacebookShareButton
      url={"https://mkmdivy.github.io/barchartrace/"+location.search}
      title="The Economic Power of Africa's cities"
      className="Demo__some-network__share-button">
      <FacebookIcon 
      size={38} 
      bgStyle={{ fill: 'white'}} iconFillColor='#4267B2'
      round
      />
      </FacebookShareButton>      
      <i className={classes.download} onClick={handleDownload}>
        <i className={classes["download-icon"]}> get_app </i>      
      </i>      
    </div> */}
</div>
);

// let menubar = (
// );

  
return (  
<div class={classes.Layout}>
  <div class={classes.Mixer}>
    <div className={classes.Large}>
      <div className={classes.SearchBar}>
        <Select 
        styles={styles}
        options={options} 
        isSearchable={false}
        isMulti 
        value={queryoption}
        onChange={ (e,d) => handleChange(e,d,history, selectedOptionvar,setSelectedOption,queryparsevar,selectedType)
          // e => pushQuery(history,{country:e[1].value})
          // setSelectedOption      
        }
        menuIsOpen={true}
        hideSelectedOptions={false}
        components={{
          Control: () => null
        }}
        />                        
      </div>      
      <div className={classes.Sm_Md}>
      Mobile view
      </div>
    </div>
  </div>
  <div className={classes.Visualisation} >
    <div className={classes.KeyFigure__Md_Lg}>
    {buttonGroup}      
      <div className={classes.KeyFiguresWrapper}>
          <Select 
          styles={styleVar}
          options={optionsvariable} 
          className={classes.KeyFigures}
          // // isMulti 
          value={selectedOptionvar}
          onChange={ (e,d) => handleChangevar(e,d,history,setSelectedOptionvar,queryparse) }
          components={{
            // IndicatorSeparator: null,
            IndicatorsContainer: IndicatorsContainer
          }}
          
          />                
      </div>      
      <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      customInput={<ExampleCustomInput />}
      onChange={(update) => {
        setDateRange(update);
      }}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
      showTwoColumnMonthYearPicker
      withPortal
    />
      <div className={classes.Sm_Md}>        
        <Select 
          className={classes.KeyFigures}
          styles={styleVar}
          options={options}           
          isMulti 
          value={queryoption}
          onChange={ (e,d) => handleChange(e,d,history, selectedOptionvar,setSelectedOption,queryparsevar,selectedType)}          
          hideSelectedOptions={true}
          isClearable={false}
          />                
      </div>      
    </div>
    <div className={classes.LineGraph}>
    {renderLineChart}
    </div>    
    {/* <div className={classes.socialgroupSM}>
      <TwitterShareButton
        url={"https://mkmdivy.github.io/pacdigitalstory/"+location.search}
        title={"The Economic Power of Africa's cities \n" + selectedOptionvar.label + ":" + queryparse.toString() + "\n" + "Explore more here:"}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={38}
          bgStyle={{ fill: 'white'}} iconFillColor='#00ACEE'
          round
           />
      </TwitterShareButton>
      <FacebookShareButton
      url={"https://mkmdivy.github.io/pacdigitalstory/"+location.search}
      title="The Economic Power of Africa's cities"
      className="Demo__some-network__share-button">
      <FacebookIcon 
      size={38} 
      bgStyle={{ fill: 'white'}} iconFillColor='#4267B2'
      round
      />
      </FacebookShareButton>      
      <i className={classes.download} onClick={handleDownload}>
        <i className={classes["download-icon"]}> get_app </i>
      </i>
    </div> */}
    <div className={classes.downloadbuttons}>
    <button className={classes.buttonActivedownload} onClick={handleDownload}>Download chart image</button>    
    <button className={classes.buttonActivedownload}>Download chart data</button>
    <button className={classes.buttonActivedownload2}>Get the full dataset</button>
    </div>
  </div>  
</div>
  );
};

export default App;

function handleChange(e, d, history, selectedOptionvar, setSelectedOption ,queryparsevar, selectedType) {
  if (e) {
    if (e.length === 0 ) {
      return;
    } else {              
        e=[e[e.length-1]]
        const newCountries = e.map(d => d.value);       
        // pushQuery(history, { country: newCountries });
        history.push({
            pathname: history.pathname,
            search: queryString.stringify({country:newCountries,type:queryparsevar})  
        })
      }
  }
}

function handleChangevar(e, d, history, setSelectedOptionvar,queryparse) {
  if (e === null) {
    return;
  } else {
    console.log(queryparse)    
    let newcon = queryparse
    newcon = typeof(queryparse)==="string"? queryparse : [queryparse[queryparse.length-1]]
    setSelectedOptionvar(e)
    console.log(newcon)
    history.push({
        pathname: history.pathname,
        search: queryString.stringify({country:newcon,type:e.value})  
    })
}
}

function handleChangeType(e,setSelectedType, history,queryparse,queryparsevar) {
  
  const newcountry = typeof(queryparse)==="string"? queryparse : queryparse[queryparse.length-1]
  setSelectedType(e)
history.push({
  pathname: history.pathname,
  search: queryString.stringify({country:newcountry,type:queryparsevar,database:e})  
})
}


function separator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
