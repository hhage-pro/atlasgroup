import { useEffect,useRef,useState } from 'react';
import { Link,Navigate,Route,Routes,useLocation,useParams,useSearchParams } from 'react-router-dom';
import { ArrowRight,ArrowUpRight,Pause,Play,Plus,Minus } from 'lucide-react';
import {Companies,ContactSection,Footer,Founder,Header,Lockup,TextLink} from './components';
import {divisions,founder,legacyRoutes,steps,asset} from './content';

export const pageTitles:Record<string,string>={'/about':'About Atlas','/contact':'Let’s talk','/privacy':'Privacy','/accessibility':'Accessibility','/404':'Page not found'};
export function pageMeta(rawPathname:string){
 const pathname=rawPathname.replace(/\/+$/,'')||'/'; // static hosts serve /mortgage/ with a trailing slash
 const division=divisions.find(d=>'/'+d.slug===pathname);
 if(division)return {title:`${division.brand} — ${division.service} in Metro Detroit | Atlas Group`,description:division.intro};
 const title=pageTitles[pathname]||(pathname==='/'?'':'Page not found');
 return {title:title?`${title} — Atlas Group`:'Atlas Group — Your next chapter. Built together.',description:'Atlas Properties, Atlas Insurance, Atlas Mortgage, and Atlas Construction. Real estate, insurance, mortgages, and construction connected around you in Metro Detroit and across Michigan.'};
}

function PageEffects(){
 const {pathname,hash}=useLocation();
 useEffect(()=>{
   const {title,description}=pageMeta(pathname);
   document.title=title;
   document.querySelector('meta[name="description"]')?.setAttribute('content',description);
   if(hash)requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
   else window.scrollTo(0,0);
 },[pathname,hash]);
 useEffect(()=>{
   const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
   document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
   return()=>observer.disconnect();
 },[pathname]);
 return null;
}

function Hero(){
 const video=useRef<HTMLVideoElement>(null);const [playing,setPlaying]=useState(false),[available,setAvailable]=useState(true);
 useEffect(()=>{
   const mq=matchMedia('(prefers-reduced-motion: reduce)');
   const load=()=>{if(mq.matches){video.current?.pause();return}video.current?.play().catch(()=>{})};
   load();mq.addEventListener('change',load);return()=>mq.removeEventListener('change',load);
 },[]);
 async function toggle(){if(!video.current)return;if(video.current.paused){await video.current.play().catch(()=>setAvailable(false))}else video.current.pause()}
 return <section className="hero" aria-labelledby="home-title">
  <img className="hero-still" src={asset("/media/hero-home.webp")} alt="" fetchPriority="high"/>
  {available&&<video className="hero-video" ref={video} src={asset("/media/hero-motion.mp4")} poster={asset("/media/hero-home.webp")} muted playsInline loop preload="metadata" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setAvailable(false)} aria-hidden="true"/>}
  <div className="hero-shade"/>
  <div className="hero-content container"><h1 id="home-title"><span>Your next </span><span>chapter. </span><span>Built together.</span></h1><p>Real estate, insurance, mortgages,<br className="desktop-break"/> and construction. Connected around you.</p><Link className="button hero-button" to="/#services">Find your next step<ArrowUpRight size={25} strokeWidth={1.5}/></Link></div>
  <div className="hero-bottom"><span>Rooted in Michigan. Looking forward.</span>{available&&<button className="video-toggle" onClick={toggle} aria-label={playing?'Pause background video':'Play background video'}>{playing?<Pause size={20}/>:<Play size={20}/>}</button>}</div>
 </section>;
}
function ServiceRail(){return <nav className="service-rail" aria-label="The Atlas companies">{divisions.map(d=><Link key={d.slug} to={'/'+d.slug}><span className="rail-label">{d.brand}<small>{d.service}</small></span><ArrowRight strokeWidth={1.35}/></Link>)}</nav>}
function ServiceExplorer(){
 const [active,setActive]=useState(0);const division=divisions[active];
 return <section id="services" className="service-section section-pad" aria-labelledby="services-title"><div className="container">
  <div className="section-heading reveal"><div><p className="eyebrow">The Atlas companies</p><h2 id="services-title">One relationship.<br/>More possibilities.</h2></div><p className="section-summary">Four licensed Atlas companies, one family, one standard of care. Start with the one you need; the rest are there when you want them.</p></div>
  <div className="service-explorer reveal"><div className="service-list">{divisions.map((d,i)=><div className={`service-row ${active===i?'active':''}`} key={d.slug}>
   <button onClick={()=>setActive(i)} aria-expanded={active===i} aria-controls={`panel-${d.slug}`}><span className="service-number">{d.number}</span><span>{d.brand}</span>{active===i?<Minus strokeWidth={1.5}/>:<ArrowRight strokeWidth={1.5}/>}</button>
   {active===i&&<div className="service-panel" id={`panel-${d.slug}`}><p>{d.service}. {d.tagline}</p><TextLink to={'/'+d.slug}>Explore {d.brand}</TextLink></div>}
  </div>)}</div><div className="service-image"><img key={division.image} src={asset(`/media/${division.image}.webp`)} alt={division.alt} loading="lazy" width="1000" height="1000"/></div></div>
 </div></section>;
}
function Approach(){return <section className="approach-section" id="approach" aria-labelledby="approach-title"><div className="approach-image"><img src={asset("/media/neighborhood.webp")} width="800" height="1100" alt="Illustrative leafy Michigan street with brick homes and welcoming porches" loading="lazy"/></div><div className="approach-content reveal"><p className="eyebrow">Our approach</p><h2 id="approach-title">Forward thinking.<br/>Michigan grounded.</h2><p className="approach-intro">Atlas brings property, protection, financing, and building into one conversation, with a Michigan license behind each one. Local experience. A clearer way forward.</p><ol className="steps">{steps.map((step,i)=><li key={step.title}><span className="step-number">0{i+1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol><TextLink to="/about">Meet Atlas</TextLink></div></section>}
function Home(){return <><Hero/><ServiceRail/><ServiceExplorer/><Approach/><Founder compact/><ContactSection/></>}

function DivisionPage(){
 const {slug}=useParams();const d=divisions.find(d=>d.slug===slug);if(!d)return <NotFound/>;
 return <><section className="detail-hero container"><div><Link to="/#services" className="breadcrumb">The Atlas companies <span>/</span> {d.brand}</Link><Lockup division={d} className="detail-lockup"/><h1>{d.heading.split('\n').map(line=><span key={line}>{line} </span>)}</h1><p>{d.intro}</p><Link className="button" to={`/contact?service=${encodeURIComponent(d.service)}`}>Let’s talk {d.service.toLowerCase()}<ArrowUpRight size={22}/></Link></div><figure><img src={asset(`/media/${d.image}.webp`)} alt={d.alt} width="800" height="900"/><figcaption>Space for what comes next.</figcaption></figure></section>
  <section className="offering-section section-pad"><div className="container offering-layout"><div className="reveal"><p className="eyebrow">{d.brand}</p><h2>Your plans.<br/>Our starting point.</h2></div><div>{d.areas.map((a,i)=><article className="offering-row reveal" key={a.title}><span className="service-number">0{i+1}</span><div><h3>{a.title}</h3><p>{a.body}</p></div></article>)}</div></div></section>
  <section className="faq-section container section-pad"><div className="reveal"><p className="eyebrow">A little clarity</p><h2>Good questions.<br/>A better beginning.</h2></div><div className="faq-list">{d.questions.map(q=><details key={q.q}><summary>{q.q}<Plus size={20} strokeWidth={1.5}/></summary><p>{q.a}</p></details>)}{d.note&&<p className="service-note">{d.note}</p>}</div></section>
  <section className="compact-cta"><div className="container"><h2>Let’s talk about<br/>your next step.</h2><Link className="button button-white" to={`/contact?service=${encodeURIComponent(d.service)}`}>Start a conversation<ArrowUpRight size={23}/></Link></div></section>
 </>;
}
function About(){return <><section className="about-intro container section-pad"><p className="eyebrow">About Atlas</p><h1>A family business.<br/>A forward-looking approach.</h1><div className="about-intro-bottom"><span>Metro Detroit roots.<br/>Michigan possibilities.</span><p>Atlas started with a simple idea: the important decisions in your life deserve someone who sees how they connect. We’re bringing that idea into a new chapter.</p></div></section><div className="about-panorama"><img src={asset("/media/about-panorama.webp")} alt="Illustrative renovated brick and oak Michigan home under golden autumn maples" width="1400" height="550"/></div>
 <section className="container about-story section-pad"><div><p className="eyebrow">A connected perspective</p><h2>Experience to build on.<br/>Room to think ahead.</h2></div><div><p>Our roots are in Michigan real estate. Our perspective reaches across insurance, mortgages, construction, and development—because a property decision rarely stands on its own.</p><p>Atlas Group is the next chapter of Atlas Properties Plus: a family business pairing {founder.name}’s hands-on experience with a clearer, more connected way to work. Four companies now carry the Atlas name, each with its own Michigan license and each free to stand on its own.</p><p>Come to us for one company or a broader conversation. We start by listening, keep your goals in view, and make space for you to choose the path that fits.</p><TextLink to="/contact">Tell us what’s next</TextLink></div></section><Founder/><Companies/><ContactSection/></>}
function ContactPage(){const [query]=useSearchParams();const chosen=query.get('service');return <ContactSection standalone initialService={divisions.some(d=>d.service===chosen)?chosen!:'Not sure yet'}/>}
function Privacy(){return <section className="legal-page container"><p className="eyebrow">Privacy</p><h1>Your information.<br/>Handled with care.</h1><p className="legal-lead">This notice explains the information used by this website preview and its inquiry form.</p><h2>Information you choose to share</h2><p>The inquiry form asks for your name, email, the Atlas company you want to reach, and a message. Please do not submit Social Security numbers, financial account details, health records, policy numbers, or other sensitive documents.</p><h2>What happens to an inquiry</h2><p>When the form is in preview mode, it clearly says so. Submissions are stored on the computer hosting this preview and are not delivered to Atlas. When email delivery is enabled, submissions are sent to the configured Atlas recipient so the team can respond to your request. Your inquiry does not enroll you in a marketing list.</p><h2>Cookies and analytics</h2><p>This build does not use advertising trackers or third-party analytics. Fonts and imagery are served with the site. The server uses a short-lived, in-memory request counter to limit repeated form submissions.</p><h2>Your choices</h2><p>You can choose not to submit the form. To ask about information you have already shared, use the contact details provided by Atlas. For local preview submissions, contact the person who shared the preview with you.</p><h2>Before public launch</h2><p>This preview notice describes the current build. The business’s final contact details, retention practices, and any additional service providers will be reflected in the public website notice.</p><TextLink to="/">Back to Atlas</TextLink></section>}
function Accessibility(){return <section className="legal-page container"><p className="eyebrow">Accessibility</p><h1>A clearer experience.<br/>For everyone.</h1><p className="legal-lead">The Atlas website is designed to work with keyboard navigation, screen readers, and your device’s display preferences.</p><h2>Ways to use this site</h2><p>Use Tab to move through links and controls. The skip link goes directly to the main content. Menus can be closed with Escape. Form fields have visible labels, and feedback is announced to assistive technology.</p><h2>Motion and readability</h2><p>The homepage film can be paused. With reduced motion enabled on your device, background playback and reveal animation are disabled by default. The layout adapts to smaller screens and increased text size.</p><h2>If something gets in your way</h2><p>Tell us the page and what you were trying to do using our contact form. Please share only the information you are comfortable providing.</p><TextLink to="/contact">Contact Atlas</TextLink></section>}
function NotFound(){return <section className="not-found container"><p className="eyebrow">Page not found</p><h1>A different path<br/>starts here.</h1><p>We couldn’t find that page. Let’s get you back to Atlas.</p><Link className="button" to="/">Back to home<ArrowRight size={22}/></Link></section>}
export function App(){return <><a className="skip-link" href="#main">Skip to content</a><Header/><PageEffects/><main id="main"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/accessibility" element={<Accessibility/>}/>{Object.entries(legacyRoutes).map(([from,to])=><Route key={from} path={from} element={<Navigate to={to} replace/>}/>)}<Route path="/:slug" element={<DivisionPage/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
