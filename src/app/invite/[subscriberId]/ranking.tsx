import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooperMedal from '../../../assets/cooper-medal.svg'
import goldMedal from '../../../assets/gold-medal.svg'
import silverMedal from '../../../assets/silver-medal.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rannkingPosition = index + 1

          return (
            <div
              key={rank.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rannkingPosition}°</span> |{' '}
                {rank.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {rank.score}
              </span>

              {rannkingPosition === 1 && (
                <Image
                  src={goldMedal}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}

              {rannkingPosition === 2 && (
                <Image
                  src={silverMedal}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}

              {rannkingPosition === 3 && (
                <Image
                  src={cooperMedal}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
