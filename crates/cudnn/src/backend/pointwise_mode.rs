use crate::sys;

#[non_exhaustive]
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum PointwiseMode {
    Abs,
    Add,
    AddSquare,
    Ceil,
    CmpEq,
    CmpGe,
    CmpGt,
    CmpLe,
    CmpLt,
    CmpNeq,
    Cos,
    Div,
    EluBwd,
    EluFwd,
    Exp,
    Floor,
    GeluBwd,
    GeluFwd,
    Log,
    LogicalAnd,
    LogicalNot,
    LogicalOr,
    Max,
    Min,
    Mod,
    Mul,
    Neg,
    Pow,
    ReluBwd,
    ReluFwd,
    Rsqrt,
    SigmoidBwd,
    SigmoidFwd,
    Sin,
    SoftplusBwd,
    SoftplusFwd,
    Sqrt,
    Sub,
    SwishBwd,
    SwishFwd,
    Tan,
    TanhBwd,
    TanhFwd,
}

impl From<PointwiseMode> for sys::cudnnPointwiseMode_t {
    fn from(mode: PointwiseMode) -> Self {
        match mode {
            PointwiseMode::Abs => Self::CUDNN_POINTWISE_ABS,
            PointwiseMode::Add => Self::CUDNN_POINTWISE_ADD,
            PointwiseMode::AddSquare => Self::CUDNN_POINTWISE_ADD_SQUARE,
            PointwiseMode::Ceil => Self::CUDNN_POINTWISE_CEIL,
            PointwiseMode::CmpEq => Self::CUDNN_POINTWISE_CMP_EQ,
            PointwiseMode::CmpGe => Self::CUDNN_POINTWISE_CMP_GE,
            PointwiseMode::CmpGt => Self::CUDNN_POINTWISE_CMP_GT,
            PointwiseMode::CmpLe => Self::CUDNN_POINTWISE_CMP_LE,
            PointwiseMode::CmpLt => Self::CUDNN_POINTWISE_CMP_LT,
            PointwiseMode::CmpNeq => Self::CUDNN_POINTWISE_CMP_NEQ,
            PointwiseMode::Cos => Self::CUDNN_POINTWISE_COS,
            PointwiseMode::Div => Self::CUDNN_POINTWISE_DIV,
            PointwiseMode::EluBwd => Self::CUDNN_POINTWISE_ELU_BWD,
            PointwiseMode::EluFwd => Self::CUDNN_POINTWISE_ELU_FWD,
            PointwiseMode::Exp => Self::CUDNN_POINTWISE_EXP,
            PointwiseMode::Floor => Self::CUDNN_POINTWISE_FLOOR,
            PointwiseMode::GeluBwd => Self::CUDNN_POINTWISE_GELU_BWD,
            PointwiseMode::GeluFwd => Self::CUDNN_POINTWISE_GELU_FWD,
            PointwiseMode::Log => Self::CUDNN_POINTWISE_LOG,
            PointwiseMode::LogicalAnd => Self::CUDNN_POINTWISE_LOGICAL_AND,
            PointwiseMode::LogicalNot => Self::CUDNN_POINTWISE_LOGICAL_NOT,
            PointwiseMode::LogicalOr => Self::CUDNN_POINTWISE_LOGICAL_OR,
            PointwiseMode::Max => Self::CUDNN_POINTWISE_MAX,
            PointwiseMode::Min => Self::CUDNN_POINTWISE_MIN,
            PointwiseMode::Mod => Self::CUDNN_POINTWISE_MOD,
            PointwiseMode::Mul => Self::CUDNN_POINTWISE_MUL,
            PointwiseMode::Neg => Self::CUDNN_POINTWISE_NEG,
            PointwiseMode::Pow => Self::CUDNN_POINTWISE_POW,
            PointwiseMode::ReluBwd => Self::CUDNN_POINTWISE_RELU_BWD,
            PointwiseMode::ReluFwd => Self::CUDNN_POINTWISE_RELU_FWD,
            PointwiseMode::Rsqrt => Self::CUDNN_POINTWISE_RSQRT,
            PointwiseMode::SigmoidBwd => Self::CUDNN_POINTWISE_SIGMOID_BWD,
            PointwiseMode::SigmoidFwd => Self::CUDNN_POINTWISE_SIGMOID_FWD,
            PointwiseMode::Sin => Self::CUDNN_POINTWISE_SIN,
            PointwiseMode::SoftplusBwd => Self::CUDNN_POINTWISE_SOFTPLUS_BWD,
            PointwiseMode::SoftplusFwd => Self::CUDNN_POINTWISE_SOFTPLUS_FWD,
            PointwiseMode::Sqrt => Self::CUDNN_POINTWISE_SQRT,
            PointwiseMode::Sub => Self::CUDNN_POINTWISE_SUB,
            PointwiseMode::SwishBwd => Self::CUDNN_POINTWISE_SWISH_BWD,
            PointwiseMode::SwishFwd => Self::CUDNN_POINTWISE_SWISH_FWD,
            PointwiseMode::Tan => Self::CUDNN_POINTWISE_TAN,
            PointwiseMode::TanhBwd => Self::CUDNN_POINTWISE_TANH_BWD,
            PointwiseMode::TanhFwd => Self::CUDNN_POINTWISE_TANH_FWD,
        }
    }
}
