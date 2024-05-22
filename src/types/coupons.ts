type DiscountType = "fixed" | "percentage" | "buyXgetY" | "freeShipping"; // 할인타입

type AvailableTime = { start: string; end: string }; // 적용 가능 조건: 사용 가능 시간

export interface RequiredProps {
  id: number; // 식별자
  code: string; // 할인 코드
  description: string; // 할인 설명
  discountType: DiscountType; // 할인타입
  expirationDate: string; // 만료기한
}

export interface FixedDiscountCoupon extends RequiredProps {
  discount: number; // 적용되는 것: 할인금액
  minimumAmount?: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface PercentageDiscountCoupon extends RequiredProps {
  discount: number; // 적용되는 것: 할인율
  minimumAmount?: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface BOGOCoupon extends RequiredProps {
  buyQuantity: number; // 적용 가능 조건: 주문 수량
  getQuantity: number; // 적용되는 것: 무료 증정 수량
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export interface FreeShippingCoupon extends RequiredProps {
  minimumAmount?: number; // 적용 가능 조건: 최소 주문 금액
  availableTime?: AvailableTime; // 적용 가능 조건: 사용 가능 시간
}

export type Coupon =
  | FixedDiscountCoupon
  | PercentageDiscountCoupon
  | BOGOCoupon
  | FreeShippingCoupon;
