package com.minhchauptit.scoremanagement.dto;

import java.util.List;

public class Transcript {
    private List<ScoreDetailDTO> listScore;
    private float termPointAverage;

    public List<ScoreDetailDTO> getListScore() {
        return listScore;
    }

    public void setListScore(List<ScoreDetailDTO> listScore) {
        this.listScore = listScore;
    }

    public float getTermPointAverage() {
        return termPointAverage;
    }

    public void setTermPointAverage(float termPointAverage) {
        this.termPointAverage = termPointAverage;
    }

}
