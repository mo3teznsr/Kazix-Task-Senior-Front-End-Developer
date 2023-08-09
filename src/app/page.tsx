import type { NextPage } from "next";
import PopularSlotsContainer from "../../components/GamesList";
import MatchList from "../../components/MatchList";
import FormContainer1 from "../../components/form-container1";
import GamesList from "../../components/bet-sports-form";
import Header from "../../components/header";


export default function Home() {
  return (
    <div className="relative flex  justify-center pt-[106px] px-3  main-container bg-primary-contrast  min-h-full   text-left text-xl text-primary-contrast font-fjalla-one">
     <div className=" lg:w-[1024px] md:w-auto overflow-hidden   flex flex-col  ">
       <Header />
       <FormContainer1 />
       <GamesList />
      <PopularSlotsContainer />
      <MatchList />
      
      
    
     
      
      </div>
      </div>
   
  );
};

