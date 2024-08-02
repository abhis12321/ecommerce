import React from 'react'

export default function CountryCode({ setCountryCode, search , setSearchable , searchable }) {
    // console.log(search);
    return (
        <div className={`absolute z-50 top-[2rem] left-0 bg-slate-950 rounded-md ${!searchable > 0 && "hidden"} max-h-[400px] overflow-auto`} onClick={e => setSearchable(false)}>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("afghanistan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+93")}>+93 (Afghanistan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("albania".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+355")}>+355 (Albania)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("algeria".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+213")}>+213 (Algeria)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("american samoa".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1684")}>+1684 (American Samoa)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("andorra".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+376")}>+376 (Andorra)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("angola".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+244")}>+244 (Angola)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("anguilla".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1264")}>+1264 (Anguilla)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("antarctica".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+672")}>+672 (Antarctica)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("antigua and barbuda".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1268")}>+1268 (Antigua and Barbuda)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("argentina".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+54")}>+54 (Argentina)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("armenia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+374")}>+374 (Armenia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("aruba".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+297")}>+297 (Aruba)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("australia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+61")}>+61 (Australia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("austria".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+43")}>+43 (Austria)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("azerbaijan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+994")}>+994 (Azerbaijan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bahamas".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1242")}>+1242 (Bahamas)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bahrain".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+973")}>+973 (Bahrain)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bangladesh".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+880")}>+880 (Bangladesh)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("barbados".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1246")}>+1246 (Barbados)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("belarus".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+375")}>+375 (Belarus)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("belgium".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+32")}>+32 (Belgium)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("belize".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+501")}>+501 (Belize)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("benin".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+229")}>+229 (Benin)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bhutan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+975")}>+975 (Bhutan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bolivia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+591")}>+591 (Bolivia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bosnia and herzegovina".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+387")}>+387 (Bosnia and Herzegovina)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("botswana".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+267")}>+267 (Botswana)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("brazil".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+55")}>+55 (Brazil)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("british virgin islands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1284")}>+1284 (British Virgin Islands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("brunei".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+673")}>+673 (Brunei)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("bulgaria".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+359")}>+359 (Bulgaria)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("burkina faso".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+226")}>+226 (Burkina Faso)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("burundi".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+257")}>+257 (Burundi)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cabo verde".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+238")}>+238 (Cabo Verde)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cambodia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+855")}>+855 (Cambodia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cameroon".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+237")}>+237 (Cameroon)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("canada".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1")}>+1 (Canada)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("central african republic".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+236")}>+236 (Central African Republic)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("chad".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+235")}>+235 (Chad)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("chile".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+56")}>+56 (Chile)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("china".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+86")}>+86 (China)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("colombia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+57")}>+57 (Colombia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("comoros".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+269")}>+269 (Comoros)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("congo".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+242")}>+242 (Congo)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("congo, democratic republic".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+243")}>+243 (Congo, Democratic Republic)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cook islands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+682")}>+682 (Cook Islands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("costa rica".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+506")}>+506 (Costa Rica)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("croatia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+385")}>+385 (Croatia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cuba".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+53")}>+53 (Cuba)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("curacao".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+599")}>+599 (Curacao)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("cyprus".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+357")}>+357 (Cyprus)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("czech republic".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+420")}>+420 (Czech Republic)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("denmark".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+45")}>+45 (Denmark)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("djibouti".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+253")}>+253 (Djibouti)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("dominica".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1767")}>+1767 (Dominica)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("dominican republic".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1809")}>+1809 (Dominican Republic)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("ecuador".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+593")}>+593 (Ecuador)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("egypt".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+20")}>+20 (Egypt)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("el salvador".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+503")}>+503 (El Salvador)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("equatorial guinea".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+240")}>+240 (Equatorial Guinea)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("eritrea".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+291")}>+291 (Eritrea)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("estonia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+372")}>+372 (Estonia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("eswatini".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+268")}>+268 (Eswatini)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("ethiopia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+251")}>+251 (Ethiopia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("fiji".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+679")}>+679 (Fiji)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("finland".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+358")}>+358 (Finland)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("france".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+33")}>+33 (France)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("gabon".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+241")}>+241 (Gabon)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("gambia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+220")}>+220 (Gambia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("georgia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+995")}>+995 (Georgia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("germany".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+49")}>+49 (Germany)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("ghana".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+233")}>+233 (Ghana)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("greece".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+30")}>+30 (Greece)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("grenada".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1473")}>+1473 (Grenada)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("guam".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1671")}>+1671 (Guam)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("guatemala".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+502")}>+502 (Guatemala)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("guinea".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+224")}>+224 (Guinea)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("guinea-bissau".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+245")}>+245 (Guinea-Bissau)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("guyana".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+592")}>+592 (Guyana)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("haiti".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+509")}>+509 (Haiti)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("honduras".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+504")}>+504 (Honduras)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("hungary".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+36")}>+36 (Hungary)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("iceland".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+354")}>+354 (Iceland)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("india".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+91")}>+91 (India)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("indonesia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+62")}>+62 (Indonesia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("iran".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+98")}>+98 (Iran)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("iraq".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+964")}>+964 (Iraq)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("ireland".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+353")}>+353 (Ireland)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("israel".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+972")}>+972 (Israel)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("italy".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+39")}>+39 (Italy)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("jamaica".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1876")}>+1876 (Jamaica)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("japan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+81")}>+81 (Japan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("jordan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+962")}>+962 (Jordan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kazakhstan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+7")}>+7 (Kazakhstan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kenya".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+254")}>+254 (Kenya)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kiribati".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+686")}>+686 (Kiribati)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("korea, north".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+850")}>+850 (Korea, North)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("korea, south".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+82")}>+82 (Korea, South)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kosovo".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+383")}>+383 (Kosovo)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kuwait".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+965")}>+965 (Kuwait)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("kyrgyzstan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+996")}>+996 (Kyrgyzstan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("laos".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+856")}>+856 (Laos)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("latvia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+371")}>+371 (Latvia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("lebanon".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+961")}>+961 (Lebanon)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("lesotho".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+266")}>+266 (Lesotho)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("liberia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+231")}>+231 (Liberia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("libya".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+218")}>+218 (Libya)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("liechtenstein".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+423")}>+423 (Liechtenstein)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("lithuania".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+370")}>+370 (Lithuania)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("luxembourg".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+352")}>+352 (Luxembourg)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("madagascar".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+261")}>+261 (Madagascar)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("malawi".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+265")}>+265 (Malawi)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("malaysia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+60")}>+60 (Malaysia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("maldives".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+960")}>+960 (Maldives)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mali".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+223")}>+223 (Mali)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("malta".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+356")}>+356 (Malta)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("marshall islands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+692")}>+692 (Marshall Islands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mauritania".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+222")}>+222 (Mauritania)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mauritius".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+230")}>+230 (Mauritius)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mexico".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+52")}>+52 (Mexico)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("micronesia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+691")}>+691 (Micronesia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("moldova".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+373")}>+373 (Moldova)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("monaco".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+377")}>+377 (Monaco)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mongolia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+976")}>+976 (Mongolia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("montenegro".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+382")}>+382 (Montenegro)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("morocco".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+212")}>+212 (Morocco)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("mozambique".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+258")}>+258 (Mozambique)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("myanmar".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+95")}>+95 (Myanmar)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("namibia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+264")}>+264 (Namibia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("nauru".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+674")}>+674 (Nauru)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("nepal".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+977")}>+977 (Nepal)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("netherlands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+31")}>+31 (Netherlands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("new caledonia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+687")}>+687 (New Caledonia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("new zealand".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+64")}>+64 (New Zealand)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("nicaragua".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+505")}>+505 (Nicaragua)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("niger".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+227")}>+227 (Niger)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("nigeria".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+234")}>+234 (Nigeria)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("north macedonia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+389")}>+389 (North Macedonia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("norway".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+47")}>+47 (Norway)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("oman".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+968")}>+968 (Oman)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("pakistan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+92")}>+92 (Pakistan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("palau".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+680")}>+680 (Palau)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("panama".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+507")}>+507 (Panama)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("papua new guinea".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+675")}>+675 (Papua New Guinea)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("paraguay".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+595")}>+595 (Paraguay)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("peru".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+51")}>+51 (Peru)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("philippines".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+63")}>+63 (Philippines)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("pitcairn islands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+64")}>+64 (Pitcairn Islands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("poland".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+48")}>+48 (Poland)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("portugal".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+351")}>+351 (Portugal)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("puerto rico".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1939")}>+1939 (Puerto Rico)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("qatar".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+974")}>+974 (Qatar)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("romania".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+40")}>+40 (Romania)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("russia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+7")}>+7 (Russia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("rwanda".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+250")}>+250 (Rwanda)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("samoa".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+685")}>+685 (Samoa)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("san marino".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+378")}>+378 (San Marino)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("sao tome and principe".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+239")}>+239 (Sao Tome and Principe)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("saudi arabia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+966")}>+966 (Saudi Arabia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("senegal".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+221")}>+221 (Senegal)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("serbia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+381")}>+381 (Serbia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("seychelles".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+248")}>+248 (Seychelles)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("sierra leone".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+232")}>+232 (Sierra Leone)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("singapore".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+65")}>+65 (Singapore)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("slovakia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+421")}>+421 (Slovakia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("slovenia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+386")}>+386 (Slovenia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("solomon islands".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+677")}>+677 (Solomon Islands)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("somalia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+252")}>+252 (Somalia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("south africa".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+27")}>+27 (South Africa)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("spain".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+34")}>+34 (Spain)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("sri lanka".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+94")}>+94 (Sri Lanka)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("sudan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+249")}>+249 (Sudan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("suriname".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+597")}>+597 (Suriname)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("sweden".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+46")}>+46 (Sweden)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("switzerland".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+41")}>+41 (Switzerland)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("syria".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+963")}>+963 (Syria)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("taiwan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+886")}>+886 (Taiwan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tajikistan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+992")}>+992 (Tajikistan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tanzania".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+255")}>+255 (Tanzania)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("thailand".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+66")}>+66 (Thailand)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("timor-leste".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+670")}>+670 (Timor-Leste)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("togo".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+228")}>+228 (Togo)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tokelau".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+690")}>+690 (Tokelau)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tonga".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+676")}>+676 (Tonga)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("trinidad and tobago".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+1868")}>+1868 (Trinidad and Tobago)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tunisia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+216")}>+216 (Tunisia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("turkey".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+90")}>+90 (Turkey)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("turkmenistan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+993")}>+993 (Turkmenistan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("tuvalu".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+688")}>+688 (Tuvalu)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("uganda".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+256")}>+256 (Uganda)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("ukraine".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+380")}>+380 (Ukraine)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("united arab emirates".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+971")}>+971 (United Arab Emirates)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("united kingdom".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+44")}>+44 (United Kingdom)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("uruguay".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+598")}>+598 (Uruguay)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("uzbekistan".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+998")}>+998 (Uzbekistan)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("vanuatu".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+678")}>+678 (Vanuatu)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("vatican city".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+379")}>+379 (Vatican City)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("venezuela".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+58")}>+58 (Venezuela)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("vietnam".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+84")}>+84 (Vietnam)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("yemen".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+967")}>+967 (Yemen)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("zambia".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+260")}>+260 (Zambia)</p>
            <p className={`px-4 p-2 hover:bg-gray-200/10 cursor-default ${!("zimbabwe".includes(search.toLowerCase())) && "hidden"}`} onClick={e => setCountryCode("+263")}>+263 (Zimbabwe)</p>
        </div>

    )
}
