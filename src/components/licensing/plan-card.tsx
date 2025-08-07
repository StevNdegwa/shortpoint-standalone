import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import './plan-card.scss';

interface PlanCardProps {
  planType: string
  status: string
  price: string
  currency: string
  period: string
  expiresDate: string
}

export function PlanCard({
  planType,
  status,
  price,
  currency,
  period,
  expiresDate
}: PlanCardProps) {
  return (
    <Card className="plan-card__container">
      <CardContent className="plan-card__content">
        <div className="">
          <div className="plan-card__row">
            <div className="plan-card__plan-label">Plan</div>
            <div className="plan-card__status">{status}</div>
          </div>
          
          <div className="plan-card__row">
            <div className="plan-card__price-container">
              <span className="plan-card__currency-text">{currency}{price}</span> USD/{period}
            </div>
          </div>
          
          <div className="plan-card__row margin-t-0">
            <div className="plan-card__expires-text">
              Expires on {expiresDate}
            </div>
            <Button className="plan-card__buy-button">
              Buy License
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
