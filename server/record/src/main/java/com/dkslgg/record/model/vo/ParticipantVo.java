package com.dkslgg.record.model.vo;

import com.dkslgg.record.util.ErrorMessage;
import com.dkslgg.record.util.RecordException;
import com.dkslgg.record.util.RegexPattern;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Getter
@Slf4j
@NoArgsConstructor
@ToString
public class ParticipantVo {
    private String matchId;
    private String puuid;
    private AccountVo account;
    private int champId;
    private int champLevel;
    private int kill;
    private int death;
    private int assist;
    private int teamId;
    private List<ParticipantItemVo> itemList;

    @Builder(toBuilder = true)
    public ParticipantVo(String matchId, String puuid, AccountVo account, int champId, int champLevel, int kill, int death, int assist, int teamId, List<ParticipantItemVo> itemList) {
        /* 유효성 검사 */
        boolean flag = false;
        if(matchId == null || !matchId.matches(RegexPattern.matchId)) {
            log.error("매치 아이디 유효하지 않음: {}", matchId);
            flag = true;
        } if(puuid == null || puuid.length() != 78) {
            log.error("PUUID 유효하지 않음: {}", puuid);
            flag = true;
        } if(account == null) {
            log.error("계정 유효하지 않음: {}", account);
            flag = true;
        } if(champId < 0) {
            log.error("챔피언 아이디 유효하지 않음: {}", champId);
            flag = true;
        } if(champLevel < 1 || 18 < champLevel) {
            log.error("챔피언 레벨 유효하지 않음: {}", champLevel);
            flag = true;
        } if(kill < 0 || death < 0 || assist < 0) {
            log.error("KDA 유효하지 않음: {}/{}/{}", kill, death, assist);
            flag = true;
        } if(teamId != 100 && teamId != 200) {
            log.error("팀 아이디 유효하지 않음: {}", teamId);
            flag = true;
        }

        if(flag) {
            throw new RecordException(ErrorMessage.MATCH_INVALID);
        }

        this.matchId = matchId;
        this.puuid = puuid;
        this.account = account;
        this.champId = champId;
        this.champLevel = champLevel;
        this.kill = kill;
        this.death = death;
        this.assist = assist;
        this.teamId = teamId;
        this.itemList = itemList;
    }
}
