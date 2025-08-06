"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@navikt/ds-css";
import {
  Button,
  RadioGroup,
  Radio,
  HStack,
  Select,
  Heading,
  VStack,
  Tag,
  FormProgress,
  Spacer,
  Box,
  Chat,
  HelpText,
  FormSummary
} from "@navikt/ds-react";
import { ArrowRightIcon, ArrowLeftIcon, EnterIcon } from "@navikt/aksel-icons";

const handleChange = (val: string) => console.info(val);

const Step1 = () => {
  return (
  <div className="">
    <RadioGroup
            legend="Velg din aldersgruppe. Dette er selvfølgelig helt urelevant for senere."
            onChange={handleChange}
          >
            <Radio value="10">10-20 år</Radio>
            <Radio value="20">21-45 år</Radio>
            <Radio value="40">46-80 år</Radio>
          </RadioGroup>
  </div>
  );
};
const Step2 = () => {
  return (
    <div className="">
      <Heading size="xsmall">Om siden:</Heading>
  <Box padding="6" background="surface-info-subtle">
    <h3>Med tanke på at dere trenger noen som kan jobbe med designsystem så tenkte jeg at jeg kan jo vise dere i praksis. Så jeg tok meg litt til rette og fant aksel, og lagde en liten nettside med deres egne komponenter.</h3>
    <br />
    <h3> Alt du ser her er deres; Box, RadioGroup, VStack, Chat, Spacer, Heading osv. Fikk et godt inntrykk av arbeidsprosessen deres, det var veldig intuitivt å navigere aksel siden.
       <br /><br />
       (Så Page componenten litt for sent, denne siden bruker innebygde tailwind funksjoner for responsivt design.) </h3>
    
    
  </Box>
  
    </div>
  );
};
const Step3 = () => {
  return <div className="mx-auto w-sm md:w-xl">
    <Box 
    background="bg-subtle"
    padding={"4"}
    borderRadius={"xlarge"}
    >
    

    <VStack gap="4">
    <Heading size="xsmall">Min chat:</Heading>

      <Chat avatar="JS" name="JØRGEN" timestamp="01.01.21 14:00" variant="info">
        <Chat.Bubble>Hei! Mitt navn er Jørgen.</Chat.Bubble>
        <Chat.Bubble>Hva kan jeg hjelpe deg med?</Chat.Bubble>
      </Chat>
      <Chat
        avatar="ON"
        name="Ola Normann"
        timestamp="01.01.21 14:00"
        position="right"
        
        >
        <Chat.Bubble>Hei Jørgen. Hvor finner jeg githuben din?</Chat.Bubble>
        
      </Chat>
      <Chat avatar="JS" name="JØRGEN" timestamp="01.01.21 14:00" variant="info">
        <Chat.Bubble>Selvfølgelig. Her er githuben min:</Chat.Bubble>
        <Chat.Bubble> <a href="https://github.com/SJKodehode">Min GitHub.</a></Chat.Bubble>
      </Chat>
    </VStack>
        </Box>
  </div>;
};
const Step4 = () => {
  return (
  <div className="">
    <HStack gap={"1"}>
    <Box background="bg-subtle" padding={"4"}>

    <p>Kommentar til siden min:</p>
    </Box>
    
<HelpText title="Hvor kommer dette fra?">
  Dette ble gjort på en dag som en liten &quot;showcase&quot; fra min side. Jeg håper dette gir dere et lite innblikk i min prosess; jeg er som sagt veldig glad i å kode på fritiden, og jeg bruker mye egentid på å lære. Jeg er veldig tilpasningsdyktig og setter meg raskt inn i andres arbeidsmetoder. <br /><br />
  Det var alt jeg hadde for nå, så håper jeg at jeg hører fra dere etter søknadsfristen går ut. 
</HelpText>
    </HStack>
  </div>
  );
};
const Step5 = () => {
  return (
    <div className="">
      <FormSummary>
  <FormSummary.Header>
    <FormSummary.Heading level="2">Oppsummering</FormSummary.Heading>
    <FormSummary.EditLink href="#" />
  </FormSummary.Header>

  <FormSummary.Answers>
    <FormSummary.Answer>
      <FormSummary.Label>Navn</FormSummary.Label>
      <FormSummary.Value>Jørgen Sørheim</FormSummary.Value>
    </FormSummary.Answer>

    <FormSummary.Answer>
      <FormSummary.Label>Adresse</FormSummary.Label>
      <FormSummary.Value>
        Professor Lochmanns gate 2b
        <br />
        0559 Oslo
      </FormSummary.Value>
    </FormSummary.Answer>

    <FormSummary.Answer>
      <FormSummary.Label>Fødselsnummer</FormSummary.Label>
      <FormSummary.Value>123456 78910</FormSummary.Value>
    </FormSummary.Answer>

    <FormSummary.Answer>
      <FormSummary.Label>Kontaktinformasjon</FormSummary.Label>
      <FormSummary.Value>
        Jorgensorheim@live.no
      </FormSummary.Value>
      <FormSummary.Value>
        +47 929 53 548
      </FormSummary.Value>
    </FormSummary.Answer>

    <FormSummary.Answer>
      <FormSummary.Label>Hvordan vil du bli varslet?</FormSummary.Label>
      <FormSummary.Value>E-post</FormSummary.Value>
      <FormSummary.Value>SMS</FormSummary.Value>
    </FormSummary.Answer>
  <FormSummary.Answer>
    <FormSummary.Value>
      Takk for meg! Her er prosjektet til nettsiden om det skulle være interessant. 
    </FormSummary.Value>
    <Link href={"https://www.github.com/SJKodehode"}>My NAV</Link>
  </FormSummary.Answer>
  </FormSummary.Answers>
</FormSummary>
    </div>
  );
};

function getStepContent(step: number) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
  }
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <VStack gap={"8"} >
      <div className=" border-b border-gray-300 h-18 items-center px-4 flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="20"
          fill="none"
          viewBox="0 0 64 20"
          focusable="false"
          role="img"
          aria-labelledby="logo-svg-title"
        >
          <title id="logo-svg-title">Til forsiden</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.4793 0.520905H56.8203C56.8203 0.520905 56.3613 0.520905 56.199 0.926432L52.5139 12.2133L48.8318 0.926432C48.6695 0.520905 48.2079 0.520905 48.2079 0.520905H35.4043C35.1271 0.520905 34.8948 0.752508 34.8948 1.02804V4.86102C34.8948 1.82046 31.6611 0.520905 29.7675 0.520905C25.5271 0.520905 22.6886 3.31523 21.8047 7.5635C21.7568 4.74522 21.5227 3.7354 20.7639 2.70117C20.4154 2.19448 19.9116 1.76854 19.3631 1.41626C18.2336 0.754282 17.2194 0.520905 15.0398 0.520905H12.4806C12.4806 0.520905 12.018 0.520905 11.8548 0.926432L9.52624 6.70009V1.02804C9.52624 0.752508 9.29564 0.520905 9.01892 0.520905H3.09697C3.09697 0.520905 2.63976 0.520905 2.47346 0.926432L0.0526208 6.92992C0.0526208 6.92992 -0.189065 7.53023 0.363486 7.53023H2.63976V18.9702C2.63976 19.2541 2.86327 19.4791 3.14841 19.4791H9.01892C9.29564 19.4791 9.52624 19.2541 9.52624 18.9702V7.53023H11.8145C13.1276 7.53023 13.4056 7.56616 13.9165 7.80442C14.2242 7.92067 14.5014 8.15582 14.6526 8.42691C14.9622 9.00991 15.0398 9.71005 15.0398 11.7745V18.9702C15.0398 19.2541 15.2677 19.4791 15.5493 19.4791H21.1759C21.1759 19.4791 21.8118 19.4791 22.0633 18.8508L23.3103 15.7672C24.9684 18.0908 27.6974 19.4791 31.089 19.4791H31.83C31.83 19.4791 32.4699 19.4791 32.7231 18.8508L34.8948 13.4698V18.9702C34.8948 19.2541 35.1271 19.4791 35.4043 19.4791H41.148C41.148 19.4791 41.7817 19.4791 42.0362 18.8508C42.0362 18.8508 44.3334 13.1446 44.3422 13.1016H44.3458C44.434 12.6268 43.8345 12.6268 43.8345 12.6268H41.7844V2.8356L48.2345 18.8508C48.4864 19.4791 49.1214 19.4791 49.1214 19.4791H55.9068C55.9068 19.4791 56.5453 19.4791 56.7972 18.8508L63.948 1.13496C64.1955 0.520905 63.4793 0.520905 63.4793 0.520905ZM34.8941 12.6268H31.036C29.5003 12.6268 28.251 11.3827 28.251 9.84442C28.251 8.30883 29.5003 7.05675 31.036 7.05675H32.1149C33.6466 7.05675 34.8941 8.30883 34.8941 9.84442V12.6268Z"
            fill="currentColor"
          ></path>
        </svg>
        <Button
          iconPosition="left"
          variant="tertiary"
          icon={<EnterIcon aria-hidden />}
        >
          Logg inn
        </Button>
          
      </div>
      <div className="mx-4 sm:mx-auto flex flex-col mb-4">
        
          <FormProgress
            totalSteps={5}
            activeStep={activeStep}
            onStepChange={setActiveStep}
            
            style={{ 
              maxWidth: "500px",
              width: "90%",
              margin: "auto"
             }}
          >
            <FormProgress.Step completed href="#">
              Dine opplysninger
            </FormProgress.Step>
            <FormProgress.Step href="#">Om siden</FormProgress.Step>
            <FormProgress.Step href="#">Min chat</FormProgress.Step>
            <FormProgress.Step href="#">Kommentar</FormProgress.Step>
            <FormProgress.Step interactive={false}>
              Oppsummering
            </FormProgress.Step>
          </FormProgress>

        <VStack gap={"8"} align={"start"}>
          <VStack gap={"1"} align={"start"}>
            <Heading size={"large"}>Om meg</Heading>
            <Tag variant="neutral-moderate" size="small">
              JØRGEN 05.08.2025
            </Tag>
          </VStack>

        <VStack gap={"2"}>
          <Heading size="large">Veiledning</Heading>
          
        </VStack>

        <div className="min-w-sm 2xl:w-5xl xl:w-3xl lg:w-xl md:w-lg sm:w-md w-sm max-w-7xl">
          {getStepContent(activeStep)}
        </div>
        <HStack gap={"4"}>
          <Button
            onClick={() => setActiveStep((s) => Math.min(5, s + 1))}
            disabled={activeStep === 5}
            iconPosition="right"
            icon={<ArrowRightIcon aria-hidden />}
            >
            Neste steg
          </Button>
          <Button
            onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
            disabled={activeStep === 1}
            variant="secondary"
            >
            Tilbake
          </Button>
        </HStack>
            </VStack>
      </div>
    </VStack>
  );
}
