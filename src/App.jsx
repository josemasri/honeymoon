import { useState } from 'react'

function App() {
  const [selectedCity, setSelectedCity] = useState('tokyo')
  const [completedActivities, setCompletedActivities] = useState(new Set())

  const toggleActivity = (activityId) => {
    const newCompleted = new Set(completedActivities)
    if (newCompleted.has(activityId)) {
      newCompleted.delete(activityId)
    } else {
      newCompleted.add(activityId)
    }
    setCompletedActivities(newCompleted)
  }

  const cities = {
    tokyo: {
      name: 'Tokio',
      dates: '25-29 ago',
      emoji: '🗼',
      color: 'from-red-500 to-pink-500',
      days: [
        {
          date: '25 ago',
          title: 'Llegada a Tokio',
          activities: [
            { time: '18:00', activity: 'Aterrizaje NRT', type: 'transport' },
            { time: '19:00', activity: 'JR Narita Express → Estación Tokio', type: 'transport' },
            { time: '20:00', activity: 'Check-in hotel (Tokio)', type: 'hotel' },
            { time: '21:00', activity: 'Cena ligera en Ramen Street (Tokyo Station)', type: 'food' },
            { time: '22:30', activity: 'Descanso', type: 'rest' }
          ]
        },
        {
          date: '26 ago',
          title: 'Asakusa & Skytree',
          activities: [
            { time: '07:30', activity: 'Desayuno en hotel', type: 'food' },
            { time: '08:30', activity: 'Metro a Senso-ji', type: 'transport' },
            { time: '09:00-11:00', activity: 'Templo, Nakamise', type: 'sightseeing' },
            { time: '11:30', activity: 'Ascenso Tokyo Skytree', type: 'sightseeing', reservation: true },
            { time: '13:00', activity: 'Almuerzo Asakusa Menchi', type: 'food' },
            { time: '15:00', activity: 'Crucero Sumida 🕐', type: 'flexible' },
            { time: '17:00', activity: 'Barrio Yanaka 🕐', type: 'flexible' },
            { time: '19:30', activity: 'Cena Izakaya Gonpachi', type: 'food' },
            { time: '22:00', activity: 'Regreso / hotel', type: 'transport' }
          ]
        },
        {
          date: '27 ago',
          title: 'Shibuya/Harajuku',
          activities: [
            { time: '07:30', activity: 'Desayuno en hotel', type: 'food' },
            { time: '08:30', activity: 'Yoyogi Park paseo', type: 'sightseeing' },
            { time: '09:00-11:00', activity: 'Meiji Jingū', type: 'sightseeing' },
            { time: '11:30', activity: 'Takeshita St. compras', type: 'shopping' },
            { time: '13:00', activity: 'Almuerzo Uobei Sushi', type: 'food' },
            { time: '15:00', activity: 'Shibuya Scramble', type: 'sightseeing' },
            { time: '17:00', activity: 'Café & shopping', type: 'shopping' },
            { time: '18:30', activity: 'Shibuya Sky sunset', type: 'sightseeing', reservation: true },
            { time: '22:00', activity: 'Regreso / hotel', type: 'transport' }
          ]
        },
        {
          date: '28 ago',
          title: 'Akihabara/Odaiba',
          activities: [
            { time: '07:30', activity: 'Desayuno en hotel', type: 'food' },
            { time: '08:30', activity: 'JR a Akihabara', type: 'transport' },
            { time: '09:00-11:00', activity: 'Electrónica & cafés temáticos', type: 'shopping' },
            { time: '11:30', activity: 'Tren Yurikamome', type: 'transport' },
            { time: '13:00', activity: 'TeamLab Borderless', type: 'sightseeing', reservation: true },
            { time: '15:00', activity: 'DiverCity + Gundam', type: 'sightseeing' },
            { time: '17:00', activity: 'Onsen Oedo-onsen 🕐', type: 'flexible' },
            { time: '19:30', activity: 'Cena en Odaiba', type: 'food' },
            { time: '22:00', activity: 'Regreso / hotel', type: 'transport' }
          ]
        }
      ]
    },
    hakone: {
      name: 'Hakone',
      dates: '29-30 ago',
      emoji: '🏔️',
      color: 'from-green-500 to-blue-500',
      days: [
        {
          date: '29 ago',
          title: 'Tokio → Hakone',
          activities: [
            { time: '08:00', activity: 'Check-out, envío maletas a Kioto (Ta-Q-Bin)', type: 'hotel' },
            { time: '09:00', activity: 'Shinkansen Kodama hasta Odawara (45 min)', type: 'transport' },
            { time: '10:00', activity: 'Hakone Free Bus al ryokan (check-in de maletas)', type: 'transport' },
            { time: '11:00', activity: 'Circuito Hakone Free-Pass: teleférico + crucero Lago Ashi', type: 'sightseeing' },
            { time: '15:30', activity: 'Onsen privado en el ryokan', type: 'relaxation' },
            { time: '18:00', activity: 'Cena kaiseki incluida', type: 'food' },
            { time: '21:00', activity: 'Noche de descanso', type: 'rest' }
          ]
        }
      ]
    },
    kyoto: {
      name: 'Kioto',
      dates: '30 ago-2 sep',
      emoji: '⛩️',
      color: 'from-orange-500 to-red-500',
      days: [
        {
          date: '30 ago',
          title: 'Hakone → Kioto',
          activities: [
            { time: '07:30', activity: 'Desayuno japonés', type: 'food' },
            { time: '09:00', activity: 'Check-out. Bus + Shinkansen Odawara-Kyoto (2 h)', type: 'transport' },
            { time: '12:00', activity: 'Check-in hotel Kioto', type: 'hotel' },
            { time: '14:00', activity: 'Paseo Gion & templo Kiyomizu-dera', type: 'sightseeing' },
            { time: '18:00', activity: 'Ceremonia del té privada 🕐', type: 'flexible', reservation: true },
            { time: '20:00', activity: 'Cena Pontocho Alley', type: 'food' }
          ]
        },
        {
          date: '31 ago',
          title: 'Arashiyama',
          activities: [
            { time: '07:00', activity: 'Tren JR a Arashiyama', type: 'transport' },
            { time: '08:00', activity: 'Bosque de bambú', type: 'sightseeing' },
            { time: '10:00', activity: 'Templo Tenryū-ji', type: 'sightseeing' },
            { time: '12:30', activity: 'Almuerzo Yudofu', type: 'food' },
            { time: '15:00', activity: 'Monos Iwatayama 🕐', type: 'flexible' },
            { time: '18:00', activity: 'Regreso hotel', type: 'transport' },
            { time: '20:00', activity: 'Cena Kaiseki', type: 'food' }
          ]
        },
        {
          date: '1 sep',
          title: 'Sur de Kioto',
          activities: [
            { time: '07:00', activity: 'Tren a Fushimi Inari', type: 'transport' },
            { time: '08:00', activity: 'Sendero de los torii', type: 'sightseeing' },
            { time: '10:00', activity: 'Templo Tofuku-ji', type: 'sightseeing' },
            { time: '12:30', activity: 'Mercado Nishiki', type: 'shopping' },
            { time: '15:00', activity: 'Tour de sake en Gekkeikan', type: 'experience' },
            { time: '18:00', activity: 'Onsen urbano 🕐', type: 'flexible' },
            { time: '20:00', activity: 'Cena ramen Ichiran', type: 'food' }
          ]
        }
      ]
    },
    osaka: {
      name: 'Osaka',
      dates: '2-3 sep',
      emoji: '🏯',
      color: 'from-purple-500 to-pink-500',
      days: [
        {
          date: '2 sep',
          title: 'Kioto → Osaka',
          activities: [
            { time: '09:00', activity: 'Check-out y tren JR Special Rapid (30 min)', type: 'transport' },
            { time: '10:00', activity: 'Dejar equipaje hotel Osaka', type: 'hotel' },
            { time: '11:00', activity: 'Castillo Osaka', type: 'sightseeing' },
            { time: '14:00', activity: 'Almuerzo Okonomiyaki Mizuno (Dotonbori)', type: 'food' },
            { time: '16:00', activity: 'Calle Shinsaibashi compras', type: 'shopping' },
            { time: '19:00', activity: 'Neon de Dotonbori + cena takoyaki', type: 'food' }
          ]
        }
      ]
    },
    seoul: {
      name: 'Seúl',
      dates: '3-6 sep',
      emoji: '🏙️',
      color: 'from-blue-500 to-purple-500',
      days: [
        {
          date: '3 sep',
          title: 'Osaka ✈️ Seúl',
          activities: [
            { time: '07:30', activity: 'Check-out, tren Nankai a KIX', type: 'transport' },
            { time: '10:40', activity: 'Vuelo a ICN (~2 h)', type: 'transport' },
            { time: '13:30', activity: 'Llegada, AREX → hotel Seúl', type: 'transport' },
            { time: '16:00', activity: 'Bukchon Hanok + Café', type: 'sightseeing' },
            { time: '19:00', activity: 'Cena K-BBQ Jongro', type: 'food' }
          ]
        },
        {
          date: '4 sep',
          title: 'DMZ',
          activities: [
            { time: '06:30', activity: 'Salida tour DMZ', type: 'experience', reservation: true },
            { time: '14:00', activity: 'Regreso ciudad', type: 'transport' },
            { time: '16:00', activity: 'Insadong compras', type: 'shopping' },
            { time: '19:00', activity: 'Cena Myeongdong Street Food', type: 'food' }
          ]
        },
        {
          date: '5 sep',
          title: 'Palacios & Gangnam',
          activities: [
            { time: '08:00', activity: 'Desayuno hotel', type: 'food' },
            { time: '09:00', activity: 'Gyeongbokgung + cambio guardia', type: 'sightseeing' },
            { time: '14:00', activity: 'Metro a Gangnam', type: 'transport' },
            { time: '19:00', activity: 'Cena Samgyetang', type: 'food' }
          ]
        }
      ]
    },
    hongkong: {
      name: 'Hong Kong',
      dates: '6-9 sep',
      emoji: '🌃',
      color: 'from-yellow-500 to-red-500',
      days: [
        {
          date: '6 sep',
          title: 'Seúl ✈️ Hong Kong',
          activities: [
            { time: '09:00', activity: 'Vuelo ICN-HKG (3 h 30)', type: 'transport' },
            { time: '13:00', activity: 'Airport Express → hotel HK', type: 'transport' },
            { time: '15:00', activity: 'Victoria Peak Tram & Sky Terrace', type: 'sightseeing', reservation: true },
            { time: '19:00', activity: 'Symphony of Lights (TST)', type: 'sightseeing' }
          ]
        },
        {
          date: '7 sep',
          title: 'Isla Lantau',
          activities: [
            { time: '08:00', activity: 'Ngong Ping 360 teleférico', type: 'transport' },
            { time: '10:00', activity: 'Tian Tan Buda', type: 'sightseeing' },
            { time: '13:00', activity: 'Almuerzo Pui O Beach 🕐', type: 'flexible' },
            { time: '16:00', activity: 'Playa/relax', type: 'relaxation' },
            { time: '20:00', activity: 'Cena Seafood Sai Kung', type: 'food' }
          ]
        },
        {
          date: '8 sep',
          title: 'Mercados Kowloon',
          activities: [
            { time: '08:00', activity: 'Temple St. mercado', type: 'shopping' },
            { time: '10:00', activity: 'Ladies Market', type: 'shopping' },
            { time: '13:00', activity: 'Dim Sum Tim Ho Wan', type: 'food' },
            { time: '16:00', activity: 'Museo Historia HK 🕐', type: 'flexible' },
            { time: '20:00', activity: 'Duck Yung Kee', type: 'food' }
          ]
        }
      ]
    },
    singapore: {
      name: 'Singapur',
      dates: '9-11 sep',
      emoji: '🦁',
      color: 'from-green-500 to-teal-500',
      days: [
        {
          date: '9 sep',
          title: 'HKG ✈️ Singapur',
          activities: [
            { time: '09:00', activity: 'Checkout, vuelo a SIN (~4 h)', type: 'transport' },
            { time: '14:00', activity: 'Taxi Grab → hotel Singapur', type: 'transport' },
            { time: '16:00', activity: 'Gardens by the Bay + Supertree', type: 'sightseeing', reservation: true },
            { time: '20:00', activity: 'Dinner Lau Pa Sat Satay', type: 'food' }
          ]
        },
        {
          date: '10 sep',
          title: 'Zoo & Cultura',
          activities: [
            { time: '08:00', activity: 'Singapore Zoo / River Wonders', type: 'sightseeing' },
            { time: '14:00', activity: 'Chinatown almuerzo hawker', type: 'food' },
            { time: '16:00', activity: 'Little India + Haji Lane', type: 'sightseeing' },
            { time: '19:30', activity: 'Cocktail Raffles Long Bar', type: 'experience' }
          ]
        }
      ]
    },
    sydney: {
      name: 'Sydney',
      dates: '11-14 sep',
      emoji: '🏄‍♂️',
      color: 'from-blue-500 to-cyan-500',
      days: [
        {
          date: '11 sep',
          title: 'SIN ✈️ Sydney',
          activities: [
            { time: '07:00', activity: 'Vuelo a SYD (7 h)', type: 'transport' },
            { time: '15:00', activity: 'Check-in InterContinental Sydney by IHG', type: 'hotel' },
            { time: '17:00', activity: 'Paseo Circular Quay + Ópera', type: 'sightseeing' },
            { time: '20:00', activity: 'Cena The Rocks', type: 'food' }
          ]
        },
        {
          date: '12 sep',
          title: 'Playas',
          activities: [
            { time: '08:00', activity: 'Ferry a Manly Beach', type: 'transport' },
            { time: '14:00', activity: 'Coastal Walk Manly-Shelly', type: 'sightseeing' },
            { time: '18:30', activity: 'Bondi sunset', type: 'sightseeing' }
          ]
        },
        {
          date: '13 sep',
          title: 'Blue Mountains',
          activities: [
            { time: '08:00', activity: 'Tour Blue Mountains (día entero)', type: 'experience', reservation: true },
            { time: '18:00', activity: 'Regreso', type: 'transport' },
            { time: '20:00', activity: 'Cena Darling Harbour', type: 'food' }
          ]
        }
      ]
    },
    melbourne: {
      name: 'Melbourne',
      dates: '14-17 sep',
      emoji: '☕',
      color: 'from-indigo-500 to-purple-500',
      days: [
        {
          date: '14 sep',
          title: 'Sydney ✈️ Melbourne',
          activities: [
            { time: '09:00', activity: 'Check-out, vuelo 1 h 30', type: 'transport' },
            { time: '12:00', activity: 'Check-in hotel Melbourne', type: 'hotel' },
            { time: '14:00', activity: 'Tranvía gratuito CBD + Federation Square', type: 'sightseeing' },
            { time: '19:00', activity: 'Cena Chinatown', type: 'food' }
          ]
        },
        {
          date: '15 sep',
          title: 'Great Ocean Road',
          activities: [
            { time: '07:00', activity: 'Tour Great Ocean Road', type: 'experience', reservation: true },
            { time: '20:00', activity: 'Regreso ciudad', type: 'transport' }
          ]
        },
        {
          date: '16 sep',
          title: 'City & St Kilda',
          activities: [
            { time: '09:00', activity: 'Brunch St Kilda Pier', type: 'food' },
            { time: '12:00', activity: 'Graffiti Hosier Lane + Queen Vic Market', type: 'sightseeing' }
          ]
        }
      ]
    },
    queenstown: {
      name: 'Queenstown',
      dates: '17-20 sep',
      emoji: '🏔️',
      color: 'from-emerald-500 to-blue-500',
      days: [
        {
          date: '17 sep',
          title: 'MEL ✈️ Queenstown NZ',
          activities: [
            { time: '08:00', activity: 'Vuelo MEL-ZQN (3 h)', type: 'transport' },
            { time: '14:00', activity: 'Check-in Sofitel Queenstown', type: 'hotel' },
            { time: '16:00', activity: 'Paseo Lake Wakatipu + Skyline Gondola', type: 'sightseeing' },
            { time: '19:30', activity: 'Cena Fergburger', type: 'food' }
          ]
        },
        {
          date: '18 sep',
          title: 'Milford Sound',
          activities: [
            { time: '07:00', activity: 'Tour Milford Sound', type: 'experience', reservation: true },
            { time: '18:00', activity: 'Regreso hotel', type: 'transport' },
            { time: '20:00', activity: 'Cena hotel', type: 'food' }
          ]
        },
        {
          date: '19 sep',
          title: 'Aventura',
          activities: [
            { time: '09:00', activity: 'Shotover Jet', type: 'experience', reservation: true },
            { time: '13:00', activity: 'Ruta vinos Gibbston', type: 'experience' },
            { time: '20:00', activity: 'Cena Rātā', type: 'food' }
          ]
        }
      ]
    },
    auckland: {
      name: 'Auckland',
      dates: '20-21 sep',
      emoji: '🌊',
      color: 'from-teal-500 to-blue-500',
      days: [
        {
          date: '20 sep',
          title: 'Queenstown ✈️ Auckland',
          activities: [
            { time: '08:00', activity: 'Vuelo ZQN-AKL (1 h 50)', type: 'transport' },
            { time: '12:00', activity: 'Check-in SO/ Auckland', type: 'hotel' },
            { time: '14:00', activity: 'SkyTower observatorio', type: 'sightseeing' },
            { time: '17:00', activity: 'Paseo Viaduct Harbour', type: 'sightseeing' },
            { time: '20:00', activity: 'Cena Federal Deli', type: 'food' }
          ]
        },
        {
          date: '21 sep',
          title: 'Regreso a México',
          activities: [
            { time: '08:00', activity: 'Check-out, shuttle aeropuerto', type: 'transport' },
            { time: '10:30', activity: 'Vuelo AKL-MEX vía LAX', type: 'transport' },
            { time: '—', activity: '✈️ Cruzando la Línea de Cambio de Fecha', type: 'transport' }
          ]
        }
      ]
    }
  }

  const reservations = [
    { city: 'Tokio', item: 'Skytree Fast-Ticket (11:00)', status: 'pending' },
    { city: 'Tokio', item: 'TeamLab Borderless (28 ago, 15:00)', status: 'pending' },
    { city: 'Tokio', item: 'Shibuya Sky (27 ago, 18:30)', status: 'pending' },
    { city: 'Tokio', item: 'Narita Express + Suica/Pasmo', status: 'pending' },
    { city: 'Hakone', item: 'Ryokan + cena kaiseki', status: 'pending' },
    { city: 'Hakone', item: 'Hakone Free-Pass digital', status: 'pending' },
    { city: 'Kioto', item: 'Ceremonia del té privada', status: 'pending' },
    { city: 'Osaka', item: 'Vuelo KIX-ICN', status: 'pending' },
    { city: 'Seúl', item: 'DMZ tour (4 sep)', status: 'pending' },
    { city: 'Seúl', item: 'eSIM Korea + T-Money', status: 'pending' },
    { city: 'Hong Kong', item: 'Peak Tram Fast-Pass', status: 'pending' },
    { city: 'Singapur', item: 'Gardens by the Bay + Cloud Forest', status: 'pending' },
    { city: 'Singapur', item: 'SkyPark Marina Bay', status: 'pending' },
    { city: 'Sydney', item: 'Blue Mountains tour', status: 'pending' },
    { city: 'Sydney', item: 'Ferry Opal Card', status: 'pending' },
    { city: 'Melbourne', item: 'Great Ocean Road tour', status: 'pending' },
    { city: 'Melbourne', item: 'Tranvía MYKI', status: 'pending' },
    { city: 'Queenstown', item: 'Milford Sound crucero', status: 'pending' },
    { city: 'Queenstown', item: 'Shotover Jet', status: 'pending' },
    { city: 'Auckland', item: 'SkyTower (opcional)', status: 'optional' }
  ]

  const getActivityIcon = (type) => {
    const icons = {
      transport: '🚊',
      hotel: '🏨',
      food: '🍜',
      rest: '😴',
      sightseeing: '🏛️',
      shopping: '🛍️',
      flexible: '🕐',
      relaxation: '♨️',
      experience: '🍶'
    }
    return icons[type] || '📍'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Luna de Miel J & F 💕
            </h1>
            <p className="text-lg text-gray-600">
              24 agosto – 21 septiembre 2025
            </p>
            <div className="mt-4 flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>Reserva pendiente</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                <span>Opcional</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Completado</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* City Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades</h2>
              <div className="space-y-3">
                {Object.entries(cities).map(([key, city]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCity(key)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedCity === key
                        ? `bg-gradient-to-r ${city.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{city.emoji}</span>
                      <div>
                        <div className="font-semibold">{city.name}</div>
                        <div className={`text-sm ${selectedCity === key ? 'text-white/80' : 'text-gray-500'}`}>
                          {city.dates}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Reservations */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Reservas Pendientes</h3>
                <div className="space-y-2">
                  {reservations.map((reservation, index) => (
                    <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                      reservation.status === 'optional' ? 'bg-blue-50' : 'bg-yellow-50'
                    }`}>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{reservation.item}</div>
                        <div className="text-xs text-gray-500">{reservation.city}</div>
                      </div>
                      <span className={`w-3 h-3 rounded-full ${
                        reservation.status === 'optional' ? 'bg-blue-400' : 'bg-yellow-400'
                      }`}></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* City Header */}
              <div className={`bg-gradient-to-r ${cities[selectedCity].color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{cities[selectedCity].emoji}</span>
                  <div>
                    <h2 className="text-3xl font-bold">{cities[selectedCity].name}</h2>
                    <p className="text-white/80">{cities[selectedCity].dates}</p>
                  </div>
                </div>
              </div>

              {/* Days */}
              <div className="p-6">
                {cities[selectedCity].days.map((day, dayIndex) => (
                  <div key={dayIndex} className="mb-8 last:mb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {day.date.split(' ')[0]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                        <p className="text-gray-500">{day.date}</p>
                      </div>
                    </div>

                    <div className="ml-6 border-l-2 border-gray-200 pl-6 space-y-4">
                      {day.activities.map((activity, activityIndex) => {
                        const activityId = `${selectedCity}-${dayIndex}-${activityIndex}`
                        const isCompleted = completedActivities.has(activityId)
                        
                        return (
                          <div
                            key={activityIndex}
                            className={`flex items-start space-x-4 p-4 rounded-lg transition-all cursor-pointer ${
                              isCompleted 
                                ? 'bg-green-50 border-2 border-green-200' 
                                : activity.type === 'flexible' 
                                  ? 'bg-blue-50 border-2 border-blue-200 hover:bg-blue-100'
                                  : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => toggleActivity(activityId)}
                          >
                            <div className="flex-shrink-0">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                isCompleted ? 'bg-green-500 text-white' : 'bg-white border-2 border-gray-300'
                              }`}>
                                {isCompleted ? '✓' : getActivityIcon(activity.type)}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold text-indigo-600">{activity.time}</span>
                                {activity.reservation && (
                                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                                    Reserva requerida
                                  </span>
                                )}
                                {activity.type === 'flexible' && (
                                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                    Flexible
                                  </span>
                                )}
                              </div>
                              <p className={`text-gray-900 ${isCompleted ? 'line-through' : ''}`}>
                                {activity.activity}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
